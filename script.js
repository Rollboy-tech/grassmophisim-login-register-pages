// Safer, commented script for login/registration UI
// Elements may or may not exist depending on whether this is login.html or signup.html
const eInput = document.getElementById('e-input');
const pInput = document.getElementById('p-input');
const eLabel = document.getElementById('e-label');
const pLabel = document.getElementById('p-label');
const pmInput = document.getElementById('pm-input');
const pmLabel = document.getElementById('pm-label');
const logInBtn = document.getElementById('log-button');
const signUpBtn = document.getElementById('reg-button');

// Preserve original UI text for resets (use empty string as safe fallback)
const eLabelText = eLabel?.textContent ?? '';
const pLabelText = pLabel?.textContent ?? '';
const pmLabelText = pmLabel?.textContent ?? '';
const logInBtnText = logInBtn?.textContent ?? '';
const signUpBtnText = signUpBtn?.textContent ?? '';

let passw = '';
let email = '';
let mPass = '';
let registering = false;
let logingin = false;

function resetDefault(inputEl, labelEl, originalText) {
    inputEl?.classList.remove('inv-input');
    labelEl?.classList.remove('inv-label');
    inputEl?.classList.remove('suc-input');
    labelEl?.classList.remove('suc-label');
    if (labelEl && originalText !== undefined) labelEl.textContent = originalText;
    if (logInBtn) logInBtn.textContent = logInBtnText;
    if (signUpBtn) signUpBtn.textContent = signUpBtnText;
}

if (eInput) eInput.oninput = (e) => resetDefault(e.target, eLabel, eLabelText);
if (pInput) pInput.oninput = (e) => resetDefault(e.target, pLabel, pLabelText);
if (pmInput) pmInput.oninput = (e) => resetDefault(e.target, pmLabel, pmLabelText);

// Email validation (lightweight for UI feedback)
if (eInput) {
    eInput.onblur = (e) => {
        const eReg = /^\S+@\S+\.\S+$/;
        const val = (e.target.value || '').trim();
        if (!val) {
            resetDefault(e.target, eLabel, eLabelText);
            email = '';
            e.target.value = '';
            return;
        }

        if (eReg.test(val)) {
            eLabel?.classList.remove('inv-label');
            e.target.classList.remove('inv-input');
            eLabel?.classList.add('suc-label');
            e.target.classList.add('suc-input');
            email = val;
            eLabel.textContent = 'Email';
        } else {
            eLabel?.classList.remove('suc-label');
            e.target.classList.remove('suc-input');
            eLabel?.classList.add('inv-label');
            e.target.classList.add('inv-input');
            eLabel.textContent = 'Email not valid!';
            email = '';
        }
    };
}

// Password validation
if (pInput) {
    pInput.onblur = (e) => {
        // require at least one upper, one lower, one special and min length 6
        const pReg = /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&*_+\-=/|\\:\";?\/])[A-Za-z0-9!@#$%&*_+\-=/|\\:\";?\/]{6,}/;
        const val = (e.target.value || '').trim();
        if (!val) {
            resetDefault(e.target, pLabel, pLabelText);
            passw = '';
            e.target.value = '';
            return;
        }

        if (pReg.test(val)) {
            pLabel?.classList.remove('inv-label');
            e.target.classList.remove('inv-input');
            pLabel?.classList.add('suc-label');
            e.target.classList.add('suc-input');
            passw = val;
            pLabel.textContent = 'Password';
        } else {
            pLabel?.classList.remove('suc-label');
            e.target.classList.remove('suc-input');
            pLabel?.classList.add('inv-label');
            e.target.classList.add('inv-input');
            pLabel.textContent = 'Password not valid!';
            passw = '';
        }
    };
}

// Confirm password logic
if (pmInput) {
    pmInput.addEventListener('blur', (e) => {
        const val = (e.target.value || '').trim();
        if (!val) {
            resetDefault(e.target, pmLabel, pmLabelText);
            mPass = '';
            e.target.value = '';
            return;
        }

        if (!passw) {
            pLabel.textContent = 'Type password first';
            pInput?.classList.add('inv-input');
            pLabel?.classList.add('inv-label');
            setTimeout(() => {
                pLabel.textContent = pLabelText;
                pInput?.classList.remove('inv-input');
                pLabel?.classList.remove('inv-label');
            }, 3000);
            e.target.value = '';
            mPass = '';
            return;
        }

        if (passw && val === passw) {
            pmLabel?.classList.remove('inv-label');
            e.target.classList.remove('inv-input');
            pmLabel?.classList.add('suc-label');
            e.target.classList.add('suc-input');
            pmLabel.textContent = 'Password Matched';
            mPass = val;
        } else {
            pmLabel?.classList.remove('suc-label');
            e.target.classList.remove('suc-input');
            pmLabel?.classList.add('inv-label');
            e.target.classList.add('inv-input');
            pmLabel.textContent = 'Password not match';
            mPass = '';
        }
    });
}

// Sign-up flow (simulated)
if (signUpBtn) {
    signUpBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (!email || !mPass || registering) {
            if (!email) {
                eLabel.textContent = 'Enter a valid email';
                eLabel?.classList.add('inv-label');
            }
            if (!mPass) {
                pmLabel.textContent = 'Passwords must match';
                pmLabel?.classList.add('inv-label');
            }
            return;
        }

        registering = true;
        const btn = ev.target;
        btn.textContent = 'Registering...';
        setTimeout(() => {
            alert(`Hello ${email}, you are registered with\nPassword: ${mPass} — congratulations!`);
            if (eInput) eInput.value = '';
            if (pInput) pInput.value = '';
            if (pmInput) pmInput.value = '';
            btn.textContent = signUpBtnText;
            resetDefault(eInput, eLabel, eLabelText);
            resetDefault(pInput, pLabel, pLabelText);
            resetDefault(pmInput, pmLabel, pmLabelText);
            registering = false;
            email = '';
            passw = '';
            mPass = '';
        }, 1500);
    });
}

// Login flow (simulated)
if (logInBtn) {
    logInBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (!email || !passw || logingin) {
            if (!email) {
                eLabel.textContent = 'Enter a valid email';
                eLabel?.classList.add('inv-label');
            }
            if (!passw) {
                pLabel.textContent = 'Enter your password';
                pLabel?.classList.add('inv-label');
            }
            return;
        }

        logingin = true;
        const btn = ev.target;
        btn.textContent = 'Logging in...';
        setTimeout(() => {
            alert(`Hello, welcome back ${email}! You are logged in.`);
            if (eInput) eInput.value = '';
            if (pInput) pInput.value = '';
            btn.textContent = logInBtnText;
            resetDefault(eInput, eLabel, eLabelText);
            resetDefault(pInput, pLabel, pLabelText);
            logingin = false;
            email = '';
            passw = '';
        }, 1200);
    });
}