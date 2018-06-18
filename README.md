# Cyber Security Timer

Enter 6 correct passwords, one-by-one, to stop your data from being deleted. You'll have 5 hours to complete the task. If you enter an incorrect password or enter a correct password more than once, you'll have 15 minutes deducted from your time. If you enter all 6 correct passwords, the timer will stop.

## Setup

```
git clone https://github.com/kboedges/cybersec-timer.git
npm install
npm start
```

## Screenshots

Enter a team name at the start
![Enter a team name at the start](/screenshots/01-begin.png)

If an entered password is correct, a checkmark appears and the next password field becomes available
![If an entered password is correct, a checkmark appears and the next password field becomes available](/screenshots/02-correct-pass.png)

If an entered password is incorrect, or if the password is correct but already used, 15 minutes will be deducted from the timer
![If an entered password is incorrect, or if the password is correct but already used, 15 minutes will be deducted from the timer](/screenshots/03-incorrect-pass.png)

If the timer reaches zero with some correct passwords entered
![If the timer reaches zero with some correct passwords entered](/screenshots/04-multiple-correct.png)

If all 6 correct passwords are entered
![If all 6 correct passwords are entered](/screenshots/05-all-correct.png)

If the countdown reaches 0
![If the countdown reaches 0](/screenshots/06-time-up.png)
