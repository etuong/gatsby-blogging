---
title: Computer Vision
stack: MATLAB, Data Science, Algorithms, Linear Algebra
description: Computer vision is an interdisciplinary scientific field that deals with how computers can gain high-level understanding from digital images or videos. From the perspective of engineering, it seeks to understand and automate tasks that the human visual system
slug: computer-vision
date: 2021-01-01T00:00:00+00:00
featuredImg: ../../images/computer-vision.jpg
readTime: 15
---

According to Wikipedia, computer vision is an interdisciplinary field that deals with how computers can be made for gaining high-level understanding from digital images or videos. Computer vision tasks include methods for acquiring, processing, analyzing and understanding digital images, and extraction of high-dimensional data from the real world in order to produce numerical or symbolic information. It involves the development of a theoretical and algorithmic basis to achieve automatic visual understanding. As a scientific discipline, computer vision is concerned with the theory behind artificial systems that extract information from images. The image data can take many forms, such as video sequences, views from multiple cameras. In my graduate studies at Carnegie Mellon University, I took a course in computer vision, which is my favorite course of all time as well as the most difficult! These are projects I completed that will encapsulate the basic idea of this powerful computer science concept. Please note that I cannot provide my source code because these assignments may be reused in the course.

### Tracking

The first groundbreaking work on template tracking was the Lucas-Kanade tracker. It basically assumes that the template undergoes constant motion in a small region. The Lucas-Kanade Tracker works on two frames at a time, and does not assume any statistical motion model throughout the sequence. The algorithm estimates the deformations between two image frames under the assumption that the intensity of the objects has not changed significantly betweenthe two frames. Starting with a rectangle $R_t$ on frame $I_t$, the Lucas-Kanade Tracker aims to move it by an offset (u; v) to obtain another rectangle $R_{t+1}$ on frame $I_{t+1}$, so that the pixel squared difference in the two rectangles is minimized. According to Wikipedia, $A^TA$ is the structure tensor of the image at all points in the rectangle. It's a gradient matrix that summarizes the principal directions in a specified neighborhood of that point.

$$A=\left[ \begin{array}{cc} I_x(q_1) & I_x(q_1) \\ I_x(q_2) & I_x(q_2) \\ \vdots & \vdots \\ I_x(q_n) & I_x(q_n) \\ \end{array} \right] \rightarrow A^TA = \left[ \begin{array}{cc} \sum I_x^2 & \sum I_xI_y \\ \sum I_xI_y & \sum I_y^2 \\ \end{array} \right] $$

As for the conditions, $A^TA$ should be invertible, well-conditioned and should not be too small due to noise (meaning the eigenvalues should not be too small). Below is a tracking example of a car with little variations. This is totally awesome because I always see bank robberies and car pursuit on T.V sky cams and now I got to learn the technology and science behind it!

The above video is quite simple but real data is often corrupted by unknown image noise or under varying illumination conditions. One way to address issue of appearance variation is to use the principal component analysis.

$$I_{t+1}=I_t+\sum_{c=1}^k w_cB_c$$

The idea to optimize $w$ is to find the minimum residual of the squared difference in the two rectangles. Suppose the residual is $I_{t+1}(x+u,y+v)-I_t(x,y)$, it guarantees an optimized $w$ from above equation provided that the residual is within an acceptable tolerance.

$$I_{t+1}(x+u,y+v)-I_t(x,y)=\sum_{c=1}^k w_cB_c \rightarrow r= \left[ \begin{array}{cccc} b_1 \; b_2 \cdots b_k \end{array} \right] \left[ \begin{array}{c} w_1 \\ w_2 \\ \vdots \\ w_k \end{array} \right] =bw \rightarrow w=b^{-1}r $$

As you can see, this example isn't so perfect because of the variation in appearance such as shading and lighting. Can you think of a way to make it "easier" for computers to track these objects? How about reducing the color channels by converting the frames to grayscale? Or use various empirical affine motion equations to form a linear combination of bases.

### Spatial Pyramid Matching for Scene Classification

The question of interest for this topic is "Given an image, can a computer program determine where it was taken?" I used the Bag-of-Words (BoW) approach. The BoW essentially trains the computer to reprense the world with visual words. The idea is to give the computer many(!) data (images) to understand and recognize so that it is "smart" enough to identify the next datum. This is where data science like Machine Learning and Data Mining come to play to supervise the dataset. To help the computer interpret the data, we filter the images and extract their properties. A filter bank is a series of flters that captures different visual properties. The Gaussian blurs are to smooth out the details by reducing noise. For example, convolving with the Laplacian Gaussian kernel allows easier detection of edges. Furthermore, the derivative of the Gaussian on the x-direction detects a change in intensity along that axis, thus vertical edges are more prominent. The same can be said for gradient of the Gaussian in respect to the y-axis which shows details on the horizontal edges. Bag of words is simple and efficient, but it discards information about the spatial structure of the image and this information is often valuable. One way to alleviate this issue is to use spatial pyramid matching. The general idea is to divide the image into a small number of cells, and concatenate the histogram of each of these cells to the histogram of the original image, with a suitable weight. The following outlines the basic idea of the algorithm.

1. Create a filter bank with different sort of scales, orientations, and bandwidths to measure the responses of the images.
1. Randomly select a number of pixels to examine and group these pixels' response in a cluster. From these data we are able to compile a dictionary of visual words.
1. Run through all images and obtain the visual word with the minimum distance on each pixel. Extract the frequency histogram where the number of bins is the number of words. For a more accurate result, use Spatial Pyramid Matching
1. Find the instance word with the largest similarity and assign its category to the image.

### Keypoints - Detectors, Descriptors and Matching

Interest point detectors find particularly salient points in an image upon which we can extract a feature descriptor. In our case, we will be using BRIEF. Once we have extracted the interest points, we can use descriptors to match them between images to do neat things like panorama stitching or scene reconstruction. Keypoints are found by using the Difference of Gaussian (DoG) detector. This detector finds points that are extrema in both scale and space of a DoG pyramid. The objective of this assignment was to learn a tomato soup can and be able to recognize and match it from various angles. We accomplish this by identifying points of interest and match them with a descriptor. One simple descriptor is BRIEF which uses the Hamming distance to compute the similarity between the potential matches. The belowed image on the left shows the ideals points of critical contrast that I needed to match and my results on the right image.

Unfortunately, my algorithm does not yield any correct matches. The closest and best result I obtained was the top left. Of course, if the test image compares to itself, the percentage of correct matches would be 100%, however I believe once rotated, the derivative of Gaussian is more difficult in terms of computing the gradient at the edges. In other words, the eigenvalues is distorted due to the change of orientation.

Homographies

### Homographies

Robots often deal with planes, whether in the form of walls, ground, or some other at surface. When two cameras observe a plane, there exists a relationship between the images captured. This relationship is defined by a 3x3 transformation matrix, called a planar homography. This was definitely one of my more favorite topics to learn in Computer Vision because it is highly practical. Let's suppose a robot is at war, it needs to be able to "stitch" the planar images that it "sees" to interpret it as a warzone and take action. A planar homopgrahy allows us to compute how a planar scene would look from a second camera location give only the first image! Furthermore, we can extrapolate any camera angle from any location without knowing any internal camera parameters. Can you quess what simple use of homography? Panoramas! For this assignment, I was given two images of the Taj Mahal and I had to use homographies to create a panorama image of the same scene.

Suppose $p \propto Hq$ where $p=[x',y',z']^T$ and $q=[x,y,z]^T$ for $p,q$ respectively, then
$$ \left \{ \begin{array}{c} x'\\y'\\z' \end{array} \right\} \sim \left[ \begin{array}{ccc} h_{11} & h_{12} & h_{13} \\ h_{21} & h_{22} & h_{23} \\ h_{31} & h_{32} & h_{33} \end{array} \right] \left \{ \begin{array}{c} x\\y\\z \end{array} \right\} \rightarrow \left \{\begin{array}{c} x'=\frac{h*{11}x+h*{12}y+h*{13}}{h*{31}x+h*{32}y+h*{33}}\\\\y'=\frac{h*{21}x+h*{22}y+h*{23}}{h*{31}x+h*{32}y+h*{33}} \end{array} \right. $$

If we multiply both sides by the denominator and arrange, we get

$$ \left \{ \begin{array}{c} x'=h*{11}x+h*{12}y+h*{13}-h*{31}xx'-h*{32}yx'-x' \\ y'=h*{21}x+h*{22}y+h*{23}-h*{31}xy'-h*{32}yy'-y' \end{array} \right. $$

To minimize the homogenous linear least squares system we seek $arg \; min ||Ah|| = arg \; min \;h^TA^TAh = \lambda_{min}$ If we decompose A using SVD method, the planar homography is precisely the last column of D corresponding to the smallest eigenvalue. Furthermore, if the eigenvalues are zero, h is exactly determined and fits all the points perfect. If the values are positive, the system is overdetermined and a residual will exist.
