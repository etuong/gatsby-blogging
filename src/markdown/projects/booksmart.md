---
title: BookSmart
stack: Java, Spring, Spring Boot, Thymeleaf, HTML, JavaScript, CSS, H2 database, JPA, Hibernate
description: I was inspired by Amazon that started out as a website selling books. I wanted to challenge myself and see if I could design and build a complete website from scratch that displays books, their info, authentication and authorization, placing book items in cart, etc.
slug: booksmart
date: 2021-12-18T00:00:00+00:00
featuredImg: ../../images/booksmart.jpg
readTime: 7
---

[Github](https://github.com/etuong/BookSmart)

This is a full stack web application on an E-commerce bookstore. This can be a template for anyone that wants an e-commerce website. It supports pretty much everything except for credit card payments.

I was inspired by Amazon that started out as a website selling books. I wanted to challenge myself and see if I could design and build a complete website from scratch that displays books, their info, authentication and authorization, placing book items in cart, etc.

Frontend uses Thymeleaf and HTML/CSS/JavaScript tech.

Backend bootstraps with Spring framework, H2 for in-memory database, JPA/Hibernate for ORM, and Spring security for authentication and authorization.

### Development

To run: `./mvnw spring-boot:run`

View on `http://localhost:8080/`

    To access the H2 database, go to http://localhost:8080/h2-console/

### Data Information

Mock data are seeded in the Seeder.java class

Data source can be configured in application.properties
