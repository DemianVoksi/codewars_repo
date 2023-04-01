/*
Growth of a Population 
Javascript
7 Kyu
By: g964

In a small town the population is p0 = 1000 at the 
beginning of a year. The population regularly increases 
by 2 percent per year and moreover 50 new inhabitants 
per year come to live in the town. How many years does 
the town need to see its population greater or equal to 
p = 1200 inhabitants?
*/

function nbYear(p0, percent, aug, p) {
  let percentageNum = percent / 100;
  let count = 0;
  while (p0 <= p) {
    let totalRise = (p0 * percentageNum) + aug;
    p0 = p0 + totalRise;
    count++
  }
  return count;
}
