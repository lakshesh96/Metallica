# Metallica
Metal Trading application

# Overview

Metallica is a Full-Stack service Based Web Application

# Tech

  * Angular 2
  
  * ASP.Net WebApi
  
  * JavaScript
  
  * BootstrapCDN

# Prerequisites

- Angular CLI

- .Net Framework

- Enable MSMQ

  > Go to Control Panel > Turn Windows features On or Off
  
  > Check MSMQ Server

# Compilation & Installation

### (Preffered way)

- Clone Git Repo

- Copy the Database file ([Metallica.mdf][DbFile]) to root of D drive (To import Metal data)

- Run Metallica WebApi

  > Navigate to Metallica_API folder
  > Open Metallica.sln in Visual Studio
  > Build and Run

- Run Metallica Angular Web App
  > Open Windows PowerShell and navigate to Metallica-Angular folder
  > Run npm install
  > Run ng serve
  
# Usage

- Open any browser

- Go to localhost port on which Angular started running in the above step
  > Default: http://localhost:4200/
  
[git-repo-url]: <https://github.com/joemccann/dillinger.git>
[DbFile]: <https://drive.google.com/open?id=1CA_-htAkC6yzSkkUdDQLm5GOok0L07kh>
