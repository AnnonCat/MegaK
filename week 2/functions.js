function getGrade (s1, s2, s3) {
    let sum = s1+s2+s3;
    if(90 <= sum && sum <= 100){
        return "A";
    } else if(80 <= s1+s2+s3 && s1+s2+s3 <= 90){
        return 'B';
    } else if(70 <= s1+s2+s3 && s1+s2+s3 <= 80){
        return 'C';
    } else if(60 <= s1+s2+s3 && s1+s2+s3 <= 70){
        return 'D';
    } else if(0 <= s1+s2+s3 && s1+s2+s3 <= 60){
        return 'F';
    } else{
        return 'Wrong number';
    }
}

getGrade(11, 12, 13)