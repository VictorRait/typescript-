// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year?.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

// my solution
// const year = document.getElementById("year")!;
// const thisYear = new Date().getFullYear().toString();
// year?.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

// Possible variations
// let year: HTMLElement | null;
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
// 	year.setAttribute("datetime", thisYear);
// 	year.textContent = thisYear;
// }

// 2nd variation:
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
