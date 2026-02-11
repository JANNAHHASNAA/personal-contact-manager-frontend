# Personal Contact Manager - Frontend (Angular)

This is the frontend for the **Personal Contact Manager**, built with Angular. It works together with the backend REST API server to manage student contacts.

---

## Overview
- User-friendly interface for managing personal contacts
- Register, login, add, edit, delete, and view contacts
- Communicates with the backend API hosted at `http://localhost:3000` (see [Backend Repo](https://github.com/JANNAHHASNAA/personal-contact-manager-backend))

---

## Prerequisites
- Node.js and npm installed: [https://nodejs.org](https://nodejs.org)  
- Angular CLI installed globally:
```bash
npm install -g @angular/cli
Setup Instructions
1. Clone the repository
git clone https://github.com/JANNAHHASNAA/personal-contact-manager-frontend.git
cd student-contact-app-frontend

2. Install dependencies
npm install

3. Configure Backend API URL
Open the Angular environment file:
src/environments/environment.ts
Set the apiUrl to point to your backend server:

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};
Make sure your backend server from this repo is running first.

4. Start the development server
ng serve