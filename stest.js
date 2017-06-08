var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    logging = webdriver.logging;
    Keys = webdriver.Key;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
var d = 0;

//login test

driver.get('http://localhost:3000').then(function(){driver.sleep(d);});

driver.findElement(By.name('userid')).sendKeys('007').then(function(){driver.sleep(d);});
driver.findElement(By.name('password')).sendKeys('123456').then(function(){driver.sleep(d);});
driver.findElement(By.name('login-patient')).click().then(function(){driver.sleep(d);});
driver.wait(until.urlIs('http://localhost:3000/patientoverview')).then(function(){driver.sleep(d);});

driver.findElement(By.className('btn btn-info btn-lg')).click().then(function(){driver.sleep(d);});
driver.wait(until.urlIs('http://localhost:3000/login')).then(function(){driver.sleep(d);});


driver.findElement(By.id("register-form-link")).click().then(function(){driver.sleep(d);});
driver.findElement(By.name('userid')).sendKeys('007').then(function(){driver.sleep(d);});
driver.findElement(By.name('password')).sendKeys('123456').then(function(){driver.sleep(d);});
driver.findElement(By.name('register')).click().then(function(){driver.sleep(d);});
driver.wait(until.urlIs('http://localhost:3000/patientsrecord')).then(function(){driver.sleep(d);});

driver.findElement(By.className('btn btn-info btn-lg')).click().then(function(){driver.sleep(d);});
driver.wait(until.urlIs('http://localhost:3000/login')).then(function(){driver.sleep(d);});

driver.findElement(By.id("register-form-link")).click().then(function(){driver.sleep(d);});
driver.findElement(By.id("login-form-link")).click().then(function(){driver.sleep(d);});
driver.findElement(By.name('userid')).sendKeys('005').then(function(){driver.sleep(d);});
driver.findElement(By.name('password')).sendKeys('123456').then(function(){driver.sleep(d);});
driver.findElement(By.name('login-doctor')).click().then(function(){driver.sleep(d);});
driver.wait(until.urlIs('http://localhost:3000/patientsrecord')).then(function(){driver.sleep(d);});

driver.findElement(By.className('btn btn-info btn-lg')).click().then(function(){driver.sleep(d);});
driver.wait(until.urlIs('http://localhost:3000/login')).then(function(){driver.sleep(d);})

//Patient flow
d = 0;
driver.findElement(By.name('userid')).sendKeys('007').then(function(){driver.sleep(d);});
driver.findElement(By.name('password')).sendKeys('123456').then(function(){driver.sleep(d);});
driver.findElement(By.name('login-patient')).click().then(function(){driver.sleep(d);});
driver.wait(until.urlIs('http://localhost:3000/patientoverview')).then(function(){driver.sleep(d);});

    //Patient update
    driver.findElement(By.className("newRecordCard")).click().then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_sugar')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_sugar')).sendKeys('5').then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_fat')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_fat')).sendKeys('57').then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_pressure_high')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_pressure_high')).sendKeys('150').then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_pressure_low')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_pressure_low')).sendKeys('85').then(function(){driver.sleep(d);});
    driver.findElement(By.xpath("//*[text() = 'Update']")).click().then(function(){driver.sleep(d);});
    driver.findElement(By.className("fa fa-times")).click().then(function(){driver.sleep(d);});

driver.findElement(By.className('btn btn-info btn-lg')).click().then(function(){driver.sleep(d);});
driver.wait(until.urlIs('http://localhost:3000/login')).then(function(){driver.sleep(d);});

//Doctor flow
d=0;

driver.findElement(By.name('userid')).sendKeys('005').then(function(){driver.sleep(d);});
driver.findElement(By.name('password')).sendKeys('123456').then(function(){driver.sleep(d);});
driver.findElement(By.name('login-doctor')).click().then(function(){driver.sleep(d);});
driver.wait(until.urlIs('http://localhost:3000/patientsrecord')).then(function(){driver.sleep(d);});
driver.findElement(By.xpath("//*[text() = 'taoxiang']")).click().then(function(){driver.sleep(d);});
driver.wait(until.urlIs('http://localhost:3000/patientoverview')).then(function(){driver.sleep(d);});

//Doctor update
    driver.findElement(By.className("newRecordCard")).click().then(function(){driver.sleep(d);});
    driver.findElement(By.name('height')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('height')).sendKeys('5').then(function(){driver.sleep(d);});
    driver.findElement(By.name('weight')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('weight')).sendKeys('57').then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_sugar')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_sugar')).sendKeys('5').then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_fat')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_fat')).sendKeys('57').then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_pressure_high')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_pressure_high')).sendKeys('150').then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_pressure_low')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('blood_pressure_low')).sendKeys('85').then(function(){driver.sleep(d);});

        //LeftDR
        driver.findElement(By.xpath("//*[text() = 'DR(left)']")).click().then(function(){driver.sleep(d);});    
        driver.findElement(By.name('score')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
        driver.findElement(By.name('score')).sendKeys('2').then(function(){driver.sleep(d);});
        driver.findElement(By.name('note')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
        driver.findElement(By.name('note')).sendKeys('It is getting worse').then(function(){driver.sleep(d);});
        driver.findElement(By.xpath("//*[text() = 'Save']")).click().then(function(){driver.sleep(d);});
        driver.findElement(By.className("fa fa-times")).click().then(function(){driver.sleep(d);});
        

        //Right

        driver.findElement(By.xpath("//*[text() = 'DR(right)']")).click().then(function(){driver.sleep(d);});    
        driver.findElement(By.name('score')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
        driver.findElement(By.name('score')).sendKeys('0').then(function(){driver.sleep(d);});
        driver.findElement(By.name('note')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
        driver.findElement(By.name('note')).sendKeys('It is getting better').then(function(){driver.sleep(d);});
        driver.findElement(By.xpath("//*[text() = 'Save']")).click().then(function(){driver.sleep(d);});
        driver.findElement(By.className("fa fa-times")).click().then(function(){driver.sleep(d);});

        //prescription

        driver.findElement(By.xpath("//*[text() = 'Prescription']")).click().then(function(){driver.sleep(d);});    
        driver.findElement(By.name('followup')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
        driver.findElement(By.name('followup')).sendKeys('2018-03-34-10-12').then(function(){driver.sleep(d);});
        driver.findElement(By.name('note')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
        driver.findElement(By.name('note')).sendKeys('Please come to the appointments on time').then(function(){driver.sleep(d);});
        
            //Druglist
            driver.findElement(By.xpath("//*[text() = 'Add New Drug']")).click().then(function(){driver.sleep(d);});
            driver.findElement(By.xpath("//*[text() = 'Add New Drug']")).click().then(function(){driver.sleep(d);});
            driver.findElement(By.xpath('//*[@id="updateForm"]/div/div/div[2]/div/div[4]/div/div[2]/div[1]')).click().then(function(){driver.sleep(d);});
            driver.findElement(By.name('drug')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
            driver.findElement(By.name('drug')).sendKeys('Metformin').then(function(){driver.sleep(d);});
            driver.findElement(By.name('dose')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
            driver.findElement(By.name('dose')).sendKeys('1 pill per day').then(function(){driver.sleep(d);});
            driver.findElement(By.name('len')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
            driver.findElement(By.name('len')).sendKeys('1 year').then(function(){driver.sleep(d);});
            driver.findElement(By.xpath("//*[text() = 'Save']")).click().then(function(){driver.sleep(d);});


            driver.findElement(By.xpath('//*[@id="updateForm"]/div/div/div[2]/div/div[5]/div/div[2]/div[1]')).click().then(function(){driver.sleep(d);});
            driver.findElement(By.name('drug')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
            driver.findElement(By.name('drug')).sendKeys('MERCURY').then(function(){driver.sleep(d);});
            driver.findElement(By.name('dose')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
            driver.findElement(By.name('dose')).sendKeys('1 pound per day').then(function(){driver.sleep(d);});
            driver.findElement(By.name('len')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
            driver.findElement(By.name('len')).sendKeys('1 year').then(function(){driver.sleep(d);});
            driver.findElement(By.xpath("//*[text() = 'Save']")).click().then(function(){driver.sleep(d);});
 

            driver.findElement(By.xpath('//*[@id="updateForm"]/div/div/div[2]/div/div[5]/div/div[2]/div[2]')).click().then(function(){driver.sleep(d);});
            driver.findElement(By.xpath("//*[text() = 'Add New Drug']")).click().then(function(){driver.sleep(d);});
            driver.findElement(By.xpath('//*[@id="updateForm"]/div/div/div[2]/div/div[5]/div/div[2]/div[2]')).click().then(function(){driver.sleep(d);});
            driver.findElement(By.xpath('//*[@id="updateForm"]/div/div/div[3]/div')).click().then(function(){driver.sleep(d);});
            driver.findElement(By.className("fa fa-times")).click().then(function(){driver.sleep(d);});
    
    driver.findElement(By.xpath('//*[@id="updateForm"]/div/div/div[3]/div')).click().then(function(){driver.sleep(d);});
    driver.findElement(By.className("fa fa-times")).click().then(function(){driver.sleep(d);});

driver.findElement(By.className('btn btn-info btn-lg')).click().then(function(){driver.sleep(d);});
driver.wait(until.urlIs('http://localhost:3000/login')).then(function(){driver.sleep(d);});

//Doctor add patient flow
d=0;
driver.findElement(By.name('userid')).sendKeys('005').then(function(){driver.sleep(d);});
driver.findElement(By.name('password')).sendKeys('123456').then(function(){driver.sleep(d);});
driver.findElement(By.name('login-doctor')).click().then(function(){driver.sleep(d);});
driver.wait(until.urlIs('http://localhost:3000/patientsrecord')).then(function(){driver.sleep(d);});
driver.findElement(By.className("fa fa-plus")).click().then(function(){driver.sleep(d);});

    //new patient form
    driver.findElement(By.name('personal_id')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('personal_id')).sendKeys('Bob').then(function(){driver.sleep(d);});
    driver.findElement(By.name('pass_word')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('pass_word')).sendKeys('123456').then(function(){driver.sleep(d);});
    driver.findElement(By.name('name')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('name')).sendKeys('Bob A.').then(function(){driver.sleep(d);});
    driver.findElement(By.name('birthday')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('birthday')).sendKeys('19800101').then(function(){driver.sleep(d);});
    driver.findElement(By.name('height')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('height')).sendKeys('175').then(function(){driver.sleep(d);});
    driver.findElement(By.name('weight')).sendKeys(Keys.chord(Keys.CONTROL, "a")).then(function(){driver.sleep(d);});
    driver.findElement(By.name('weight')).sendKeys('127').then(function(){driver.sleep(d);});
    driver.findElement(By.xpath('//*[@id="signUpForm"]/div/div/div[2]/div[7]/div[2]/div[1]')).click().then(function(){driver.sleep(d);});
    driver.findElement(By.xpath('//*[@id="signUpForm"]/div/div/div[2]/div[7]/div[2]/div[2]')).click().then(function(){driver.sleep(d);});
    driver.findElement(By.xpath('//*[@id="signUpForm"]/div/div/div[2]/div[7]/div[2]/div[1]')).click().then(function(){driver.sleep(d);});
    driver.findElement(By.xpath('//*[@id="signUpForm"]/div/div/div[2]/div[7]/div[2]/div[2]')).click().then(function(){driver.sleep(d);});
    driver.findElement(By.xpath("//*[text() = 'Register']")).click().then(function(){driver.sleep(d);});
    driver.findElement(By.className("fa fa-times")).click().then(function(){driver.sleep(d);});
driver.findElement(By.className('btn btn-info btn-lg')).click().then(function(){driver.sleep(d);});
driver.wait(until.urlIs('http://localhost:3000/login')).then(function(){driver.sleep(d);});
driver.quit();



