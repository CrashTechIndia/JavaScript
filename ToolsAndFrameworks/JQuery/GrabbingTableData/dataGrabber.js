// to be un in console of for seeing llive results -> Concepts\AJAX\Populating Table\table.html

const fun = () => {
	const myRows = [];
	const $headers = $("th")(
		$("tbody tr").each((index) => {
			// eslint-disable-next-line no-undef
			const cells = $(this).find("td");
			myRows[index] = {};
			cells.each((cellIndex) => {
				myRows[index][$($headers[cellIndex]).html()] = $(this).html();
			});
		})
	)();

	// Let's put this in the object like you want and convert to JSON
	// (Note: jQuery will also do this for you on the Ajax request)

	const myObj = {};
	myObj.myrows = myRows;
	// console.log(JSON.stringify(myObj));
	return myObj;
};

// additional console commands
console.table(fun().myrows);
