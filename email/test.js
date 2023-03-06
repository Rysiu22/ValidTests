    const isValidEmail = (email) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
      }
      
// https://www.softwaretestingo.com/test-cases-for-email-field/
console.log('Start test');

var validFileName = 'valid.txt';
var invalidFileName = 'Invalid.txt';
// data in files is separate with single TAB

function testPass(valid)
{
    console.log('\n\nTESTING VALID:');
    for(var i=0; i < valid.length; i++)
    {
        var result = isValidEmail(valid[i][0])
        if(result === true)
        {
            console.log('[+] PASS "' + valid[i][0] + '" : ' + valid[i][1]);
        }
        else
        {
            console.log('[ ] FAIL "' + valid[i][0] + '" : ' + valid[i][1]);
        }
        
    }
}

function testFail(valid)
{
    console.log('\n\nTESTING INVALID:');
    for(var i=0; i < valid.length; i++)
    {
        var result = isValidEmail(valid[i][0])
        if(result !== true)
        {
            console.log('[+] PASS "' + valid[i][0] + '" : ' + valid[i][1]);
        }
        else
        {
            console.log('[ ] FAIL "' + valid[i][0] + '" : ' + valid[i][1]);
        }
        
    }
}

function getTestData(data)
{
    lines = data.split('\n');
    for(var i=0; i < lines.length; i++)
    {
        lines[i] = lines[i].split('\t');
    }
    return lines;
}

function readData(file)
{
    const fs = require('fs');
    //import fs from 'fs';
    
    const result = fs.readFileSync(file,'utf-8');
    return result;
    /*
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
    */
}

var data = readData(validFileName)
valid = getTestData(data)
testPass(valid);

var data = readData(invalidFileName)
valid = getTestData(data)
testFail(valid);

