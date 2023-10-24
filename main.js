/* Is your HTML file connected to your JS file?
Have you defined arrays for possible names and occupations?
Have you defined an initial array of freelancers?
Do you know how you want the freelancers' information to be displayed on the page?
Have you written and called a function to render the initial freelancer data?
Have you written a function to generate a new random freelancer?
Is this function being called in an interval?
Have you written a function to calculate the average starting price of your freelancers' array?
When should this function be called to update the displayed message?
*/
const freeLanceWriters = [
    {
        name: 'Alice',
        occupations: 'Writer',
        startingPrice: 30
    },
    {
        name: 'Bob',
        occupations: 'Teacher',
        startingPrice: 50
    },
    {
        name: 'Carol',
        occupation: 'Programmer',
        startingPrice: 70
    }
]
function render() {
    const freelanceWritersEl = document.querySelector
    const template = freeLanceWriters.map(writer => )
    const tr= document.createElement("tr");
    const td1 = document.createElement("td");
    cd1.textContent = writer.name;
    const td2 = document.createElement("td");
    cd2.textContent = '$${writer.startingPrice}';
    cr.append(td1, td2, td3);
    return tr;
}

    freelanceWritersEl.replaceChildren(...template);