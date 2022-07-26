---
title: Numerical Analysis
stack: MATLAB, Numerical Analysis, Computational Mechanics, Computational Fluid Dynamics, Linear Algebra
description: Numerical analysis is the study of algorithms that use numerical approximation for the problems of mathematical analysis. It is the study of numerical methods that attempt at finding approximate solutions of problems rather than the exact ones.
slug: numerical-analysis
date: 2015-02-01T00:00:00+00:00
featuredImg: ../../images/numerical-analysis.jpg
readTime: 17
---

### Abstract

_The study of Chaos Theory to analyze unprecedented events has been advancing since mid 20th century. Scientists and researchers find many applications from this field such as weather rediction and explanation of the rise and fall of stocks through the examination of the Lorenz attractor. This page seeks to have a better understanding of the chaotic behavior of the deterministic system by solving the system of ordinary differential equations using two numerical methods (Runge Kutta to the 4th order and the adaptive Runge Kutta. It is shown that the adaptive method yields significant better results and the analysis of the Lorenz attractor plays a vital role in understanding chaos theory. For my numerical method grad course, I designed a software package to understand the behavior of the Lorenz attractor on different parameters._

### Introduction

Chaos theory is a field of study in mathematics that concerns the behavior of dynamical systems with sensitive initial conditions. It is based on the notion that a small difference in initial conditions such as loss of significance and rounding errors can cause diverging outcomes to the system (deterministic or stochastic), thus rendering it predictable in the long term. Chaos, as summarized by Edward Lorenz, is "when the present determines the future, but the approximate present does not approximately determine the future [1]." Chaos theory deals with nonlinear systems that are impossible to predict or control such as turbulence, weather, brain states, and stock market. One main characteristic of this theory is its unpredictability. Because we can never know if the initial conditions are sufficient enough, the ultimate fate of the system cannot be determined. A slight error in measuring the state of the system can dramatically alter the result, and as such long-range weather prediction is not possible. Chaos exists in many natural phenomena such as weather and one approach to mathematically model its behavior is through the Lorenz attractor. The overall idea of chaos theory can be summarized by Poincar´e in 1903: _"A very small cause which escapes our notice determines a considerable effect that we cannot fail to see...even if the case that the natural laws had no longer secret for us...we could only know the initial situation approximately...It may happen that small differences in initial conditions produce very great ones in the final phenomena."_

### Motivation

The motivation in this study is that chaotic systems have been widely adopted in many areas of study such as chemical reaction, weather forecast, electrical circuit, stockmarket, human biology , message encryption, etc. The subsequent paragraphs in this motivation section is devoted to explaining an example of the application of chaotic systems in message encryption. One concept that one needs to grasp in order to understand how chaotic systems work in message encryption is that in the chaotic world it is impossible to build two chaotic systems to produce the same output. However, ”if two identical stable systems are driven by the same chaotic signal,” the outputs are two chaotic signals that are identical to each other. With this concept in mind, the message encryption process can be presented as the following [3].

Referring to the figure below, at the sending location chaotic signal x is generated and fed into a stable system F to produce the output as another chaotic signal y. Message encryption occurs when the message is mixed with the chaotic signal y and the result is the message-carrying signal y* that has a chaotic behaviour. Next step is to transmit two signals to the receiving location. One is the original chaotic signal x and the other is the message-carrying chaotic signal y*. At the sending location only chaotic signal x is fed into another stable system F which is identical to the stable system F at the sending location. Therefore, the output will be the chaotic signal y, which is the same output produced by the corresponding stable system F at the sending location. Finally, the original message can be recovered by subtracting chaotic signal y from the message-carrying chaotic signal y\* at the receiving location. [3]

### Interested Concentration

A Lorenz system is a system of ordinary differential equations with chaotic solutions for certain parameter values and initial conditions. When plotted, the system resembles a butterfly, hence chaos theory is often time called the Butterfly Effect. A simple analogy is the following: a flap of a butterfly in Mexico can cause a tornado in Texas. The notion is that a slight change in the current state could potentially cause a drastic change in the long-term effect, thus the validity of the starting points is highly sensitive.

$$
\begin{array}{ccc}
\frac{dx}{dt}&=& \sigma (y-x)\\
\frac{dy}{dt}&=& x(\rho-z)-y\\
\frac{dz}{dt}&=& xy-\beta z \\
 \end{array}
$$

In Lorenz system, $x$, $y$, and $z$ are the system state, $t$ is time, $\sigma$, $\rho$, and $\beta$ are the system parameters. The constants $\rho$, $\beta$, and $\sigma$ determine the behavior of the system. Lorenz defines a deterministic sequence as one in which only one thing can happen next from an existing event. Furthermore, deterministic chaos is something that looks random, but is still deterministic. For the purpose of this page, we will use the canonical parameters $\rho=10$, $\beta=\frac{8}{3}$, and $\sigma=28$.

### Mathematics and Procedure

Any $n^{th}$ order linear ordinary differential equation can be expressed in the form of a system of first order linear ODEs. Numerical approximation is applied to ascertain values that may otherwise be impossible to solve through traditional methods. One popular family of numerical methods is the Runge Kutta which carries a better computational accuracy than the other methods [4]. Runge Kutta method consists of a number of numerical methods that can provide different levels of accuracy. Runge Kutta Fourth Order is one of the Runge Kutta methods and was introduced in the class. Therefore, the goal of this study is to introduce a new Runge Kutta method called Adaptive Runge ­Kutta method that is hypothetically capable of providing a better accuracy and efficiency than Runge ­Kutta Fourth Order method. The procedure in this study is to solve the Lorenz attractor by using both Adaptive Runge ­Kutta and RK4 methods and compare the results. The motivation for comparing the two methods is that the efficiency gained in adaptive RK can be hundred times or more compared to RK4 [5].

### Runge Kutta Fourth Order

As presented in the class, Runge ­Kutta Fourth Order or RK4 is one amongst a family of numerical methods developed by two German Mathematicians C. Runge and M.W. Kutta that are cable of approximating the solutions to ordinary differential equations by discretizing both spatial and temporal domains. Runge ­Kutta methods can also be extended to solve a system of initial value problems (IVPs) ­ which is the case for the Lorenz Attractor. RK4 requires four ­function evaluations as presented in equation 4 to 8 and it has an error in the order of $O(h^4)$ [6].

$$ dx(t) = f(x,t) \quad x(0)= x_0 = a$$

$$k_1 = hf(t_i,x_i)$$

$$k_2 = hf(t_i+\frac{1}{2}h,x_i+\frac{1}{2}k_1)$$

$$k_3 = hf(t_i+\frac{1}{2}h,x_i+\frac{1}{2}k_2)$$

$$k_4 = hf(t_i+h,x_i+k_3)$$

$$x_{i+1} = x_i+\frac{1}{6}(k_1+2k_2+2k_3+k_4)$$

where $h$ is the size step and $t_i=t_0+ih$

### Adaptive Runge Kutta

Adaptive Runge ­Kutta method is the extension of RK4 method in that RK4 uses a uniform time step size throughout the entire domain (Figure 2.a) while Adaptive Runge­Kutta method uses non-uniform time step size by employing the step size control method in order to obtain an estimate within a prescribed tolerance $\epsilon$ and with a minimum computational effort. The purpose of adapting the step size is to use smaller steps with steep slope regions of the solution curve and to use larger steps with shallow slope regions of the solution curve in order to obtain an estimate within $\epsilon$

In order to adapt the step size, expected error estimate is needed to compare to the prescribed tolerance, $\epsilon$. If the expected error is smaller or equal to the tolerance, the current step size shall be used for the next step otherwise a new step size is to be computed based on the estimate error. There are two common methods in estimating the expected error. The first method, called step doubling, is to take each step twice using step sizes $h$ as full step and $h/2$ as two small steps. The expected error is calculated as the difference between the two results. The second method is to use higher-­lower order method in which the idea is to calculate the error as the difference between results from two order methods, say 4th and 5th, and adapt a unique step size for the next time step throughout.The adaptive Runge ­Kutta method conducted in this study is the Runge ­Kutta ­Fehlberg method, also known as Embedded Runge ­Kutta Formulas (RK45) [5].

Runge ­Kutta ­Fehlberg Method (RK45) was developed by a German mathematician Erwin Fehlberg in 1969 with error in order of $O(h^5)$. RK45 requires six function evaluations. A combination of these functions provides the calculation of the next step based on RK4, $x_{i+1}^{RK4}$, (eq.15) and a different combination of these functions provides the calculation of the next step based on RK5, $x_{i+1}^{RK5}$

$$k_1 = hf(t_i,x_i)$$

$$k_2 = hf(t_i+\frac{h}{4},x_i+\frac{k_1}{4})$$

$$k_3 = hf(t_i+\frac{3}{8}h,x_i+\frac{3}{32}k_1+\frac{9}{32}k_2)$$

$$k_4 = hf(t_i+\frac{12}{13}h,x_i+\frac{1932}{2197}k_1-\frac{7200}{2197}k_2+\frac{7296}{2197}k_3)$$

$$k_5 = hf(t_i+h,x_i+\frac{439}{216}k_1-8k_2+\frac{3680}{513}k_3-\frac{845}{4104}k_4)$$

$$k_6 = hf(t_i+\frac{1}{2}h,x_i-\frac{8}{27}k_1+2k_2-\frac{3544}{2565}k_3+\frac{1859}{4104}k_4-\frac{11}{40}k_5)$$

$$x_{i+1}^{RK4} = x_i+\frac{25}{216}k_1+\frac{1408}{2565}k_3+\frac{2197}{4104}k_4-\frac{1}{5}k_5$$

$$x_{i+1}^{RK5} = x_i+\frac{16}{135}k_1+\frac{6656}{12825}k_3+\frac{28561}{56430}k_4-\frac{9}{50}k_5+\frac{2}{55}k_6$$

$$R = \frac{1}{h}|x_{x+1}^{RK5}-x_{x+1}^{RK4}|$$

$$\delta = 0.84\left(\frac{\epsilon}{R}\right)^{\frac{1}{4}}$$

If $R <=\epsilon$ keep $x$ as the current step solution and move to the next step with step size $\delta h$.

If $R>\epsilon$ recalculate the current step with step size $\delta h$.

Step-doubling as a means for adaptive stepsize control in fourth-order Runge-Kutta. Points where the derivative is evaluated are shown as filled circles. The open circle represents the same derivatives as the filled circle immediately above it, so the total number of evaluations is 11 per two steps. Comparing the accuracy of the big step with the two small steps gives a criterion for adjusting the stepsize on the next step, or for rejecting the current step as inaccurate [5].

### Result and discussion

The solutions to Lorenz Attractor found using both methods are presented in Figure 4. These results are projected onto three principal planes xy, yz and xz for the purpose of comparison. It can be observed that in general the plots of solution after a given time, t, from RK45 are smoother than those from RK4. This indicates that RK45 is capable in providing a more accurate result than RK4.

Initial step size used is h=0.1s. Although, RK45 provides a more accurate estimate of the solution within a prescribed tolerance however it is more computationally expensive. Figure 6 shows the plot of comparison of the computational time between RK4 and RK45 for solving the Lorenz Attractor. Both methods start with the initial time step $h=0.1 seconds$. Horizontal axis is the time upper limit, t, in seconds; while the vertical axis is the runtime in seconds for each time upper limit. In light of the accuracy in data taking, for each time upper limit, the runtime was taken for three test runs and the average of these three runs are used to plot the relationship between time upper limit versus runtime. The graphs obtained from both methods are approximately linear line. By using the linear regression in MALAB, the slope of RK4 and RK45 are 0.00065 and 0.0035, respectively. This indicates that as time progresses the runtime for solving the Lorenz Attractor increases by a factor of 0.00065 and 0.0035 for using RK4 and RK45, respectively.

The time spectrum on suggests that the system is always fluctuating and no equilibrium (dynamic or static) is ever reached. Moreover, for a deterministic system, one would expect Figure 6 to have a constant fluctuation (much like a sine wave or horizontal line), but it is clear that the attractor begins to exhibit a chaotic behavior after $t=13$. This is essentially the main idea of chaos theory - that deterministic system never achieves a steady state and trajectory never coincides with any other (See Figure 6). Using both Runge Kutta methods, one thing is certain, it doesn't matter how close two different initial conditions are, their trajectories will eventually diverge.

### Conclusion

The fact that the Lorenz attractor is sensitive to its starting point to a plausible extent suggests that Weather is usually predictable only about a week ahead [11]. Long term prediction cannot be made due to the system’s chaotic behavior after some t time. A future study can be examined in the context of random data versus chaotic data. This page solely seeks a comparison between the two Runge Kutta methods as a numerical approximation to study the theory, but real life application calls for unwanted and corrupting noises. Theoretically, even when the system is deterministic, the real time series will consist of a few stochastic data, therefore one should be careful when defining the error as the difference between the time evolution of the ’test’ state and the time evolution of the nearby state. Finally, it is without a doubt that studying chaos theory will provide mankind better control of the predictibility of standard living, but we are far from comprehending its chaotic behavior. It is difficult to even a simplify a gaseous system in a small domain, let alone simulate the weather by breaking the atmosphere into many millions of interactive systems and predict the weather for next month since we don’t know the initial conditions at time t=0 very accurately.

### References

1. Danforth, Christopher M. Chaos in an Atmosphere Hanging on a Wall, Mathematics of Planet Earth, 2013.
1. Fractal Foundation, What is Chaos Theory, Fractals are Smart: Science, Math and Art! http://fractalfoundation.org.
1. George, Yurkon T. (1997). Introduction to Chaos and It's Real World Applications. http://www.csuohio.edu/sciences/dept/physics/physicsweb/kaufman/yurkon/chaos.html.
1. Camhdag, Ezel. Runge Kutta Methods. Cankaya University, January 27, 2009. Press, W. H. (1996). Chapter 16. Integration of Ordinary Differential Equations. Numerical recipes in fortran 77: the art of scientific computing (2nd ed., pp. 701-744). Cambridge [England: Cambridge University Press.
1. Press, William H. , Teukolsky, Saul A. , Vetterling, William T, and Flannery, Brian P. Numerical Recipes in C, Second Edition, Cambridge University Press 1992.
1. Bradley, Larry. Chaos and Fractals, 2010 http://www.stsci.edu/~lbradley/seminar/references.html.
1. Kellert, Stephen H. In the Wake of Chaos: Unpredictable Order in Dynamical Systems, University of Chicago Press 1993. p. 32.
1. Sparrow, Colin. The Lorenz Equations: Bifurcations, Chaos, and Strange Attractors, Springer 1982.
1. Hilborn, Robert C. Chaos and Nonlinear Dynamics: An Introduction for Scientists and Engineers (second ed.). Oxford University Press 2010.
1. Watts, Robert G. (2007). Global Warming and the Future of the Earth. Morgan and Claypool. p. 17.
