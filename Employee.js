const IS_ABSENT = 0
let empCheck = Math.floor(Math.random()*10) %2;
if (empCheck == IS_ABSENT){
    console.log("Employee is Absent");
    return;

}else{
    console.log("Employee is PRESENT");
}
const IS_PART_TIME = 1;
const IS_FULL_TIME =2;
const  PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

  let empHrs = 0;
empCheck = Math.floor(Math.random()* 10) %3;
switch (empCheck){
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default :
        empHrs = 0;
    }
  let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage:" + empWage); 
function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
                default:
                    return 0;
    }
}
 empHrs = 0;
 empCheck = Math.floor(Math.random()*10) % 3;
empHrs = getWorkingHours(empCheck);
empWage = empHrs * WAGE_PER_HOUR;
  
console.log ("Emp Wage: "+ empWage);
const NUM_OF_WORKING_DAYS = 2;
empHrs = 0;
for (let day =0; day<NUM_OF_WORKING_DAYS; day++){
    let empCheck = Math.floor(Math.random()*10) %3;
    empHrs += getWorkingHours(empCheck);
}
 empWage = empHrs * WAGE_PER_HOUR;
 console.log("Total Hrs: "+empHrs+ "Emp Wage: " +empWage);
 //UC5
 const MAX_HRS_IN_MONTH = 100;
   const NUM_OF_WORKING_DAY = 10;
  totalEmpHrs = 0;
  let totalWorkingDays = 0;
  while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAY){
    totalWorkingDays++;
    empCheck = Math.floor(Math.random()*10) %3;
    totalEmpHrs += getWorkingHours(empCheck);
  }
   empWage = totalEmpHrs * WAGE_PER_HOUR;
   console.log("UC5- Total Days: " + totalWorkingDays + "Total Hrs:" + totalEmpHrs + "Emp Wage: " + empWage);
   //UC6
   function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;

   }
     const MAX_HRS_IN_MONTHS = 160;
     const WORKING_DAYS = 20;
     totalEmpHrs = 0;
     totalWorkingDays = 0;
     empDailyWageArr = new Array();
     while (totalEmpHrs <= MAX_HRS_IN_MONTHS && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random()*10) %3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
     }
     empWage = calcDailyWage(totalEmpHrs);
     console.log("UC6 - Total Days :" + totalWorkingDays + "Total Hrs:" + totalEmpHrs + "Emp Wage:" + empWage);
     //UC7
     let totEmpWage = 0;
     function sum(dailyWage){
        totEmpWage += dailyWage;

     }

     empDailyWageArr.forEach(sum);
     console.log("UC7A-Total Days:" + totalWorkingDays+" Total Hrs: " + totalEmpHrs + "Emp Wage:" + totEmpWage);
     function totalWages(totalWage, dailyWage){
        return totalWage + dailyWage;
     }
     console.log("UC7A- Emp Wage with reduce:" + empDailyWageArr.reduce(totalWages,0));
     //UC7 -B
     let dailyCntr = 0;
     function mapDayWithWage(dailyWage){
        dailyCntr++;
        return dailyCntr + "=" + dailyWage;
     }
     let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
     console.log("UC7B-Daily Wage Map");

     console.log(mapDayWithWageArr);

     //UC7-C

     function fulltimeWage(dailyWage){
        return dailyWage.includes("160");

     }
     let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
     console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
     console.log(fullDayWageArr);

     //UC7-D
     function findFulltimeWage(dailyWage){
        return dailyWage.includes("160");

     }
     console.log("UC 7D- First time Fulltime wage was earned on Day: "+mapDayWithWageArr.find(findFulltimeWage));

     //UC7- E 
     function isAllFulltimeWage(dailyWage){
        return dailyWage.includes("160");
     }
     console.log("UC 6E - check All Elements have Full Time Wage: " + fullDayWageArr.every(isAllFulltimeWage));

     //UC7-F
     function isAnyPartTimeWage(dailywage){
        return dailywage.includes("80");
     }
     console.log ("UC 7F - Check If Any Part Time Wage: "+ mapDayWithWageArr.some(isAnyPartTimeWage));

     //UG 7G 

     function totalDaysWorked(numOfDays, dailyWage){
        if(dailyWage > 0 ) return numOfDays+1;
        return numOfDays;

     }
     console.log ("UC 7G - Number of Days Emp Worked :"+ empDailyWageArr.reduce(totalDaysWorked,0));








