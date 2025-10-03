# Automation Test for OrangeHRM Demo

Proyek ini berisi automation testing menggunakan **Cypress** pada website [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/).  
Testing mencakup fitur **Login**, **Forgot Password**, serta menu **Dashboard (Directory)**.  
Struktur menggunakan **Page Object Model (POM)** dan **Intercept** untuk pengujian API.  

---

## 📂 Struktur Proyek

```
cypress/
 ├── e2e/
 │   └── FinalProject/
 │       ├── LoginPage.cy.js
 │       ├── ForgotPasswordPage.cy.js
 │       └── DashboardPage.cy.js
 ├── support/
 │   └── FinalProject_commands/
 │       ├── Login/loginPOM.js
 │       ├── ForgotPassword/forgotPasswordPOM.js
 │       └── Dashboard/dashboardPOM.js
 └── fixtures/
     └── dataFinal.json
```

---

## 🚀 Fitur yang Diuji

1. **Login**
   - Valid login (username & password benar)
   - Invalid login (username/password salah)
   - Empty fields validation

2. **Forgot Password**
   - Input email valid
   - Input email whitespace
   - Cancel

3. **Dashboard (Directory)**
   - Search berdasarkan **Employee Name**
   - Search berdasarkan **Job Title**
   - Search berdasarkan **Location**
   - Kombinasi pencarian
   - Reset filter pencarian

---

## 🛠️ Teknologi

- [Cypress](https://www.cypress.io/) untuk end-to-end testing
- Page Object Model (POM) untuk struktur test lebih rapi
- Cypress Intercept untuk memantau request API

---

## 📦 Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/bagaspray/Automation-Test-for-Login.git
   cd Automation-Test-for-Login
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan Cypress:
   ```bash
   npx cypress open
   ```

---

## 🔗 Repository

[Automation-Test-for-Login](https://github.com/bagaspray/Automation-Test-for-Login.git)
