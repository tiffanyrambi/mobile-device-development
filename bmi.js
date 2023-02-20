// menghitung body mass index
export default function bmi(weight, height) {
    let bmi = weight / (height**2);
    console.log(`BMI =  ${bmi}`);

    if(bmi < 18.5){
      //return "Underweight";
      console.log("underweight");
    }else if (bmi < 25){
      //return "Normal";
      console.log("normal");
    }else if (bmi < 30){
      //return "Overweight";
      console.log("overweight");
    }else{
      //return "Obese";
      console.log("obese");
    }
  }
