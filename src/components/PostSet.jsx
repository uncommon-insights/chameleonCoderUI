import React, { useEffect, useState } from "react";

function PostSet(url, bod, invar) {
    const [records, setRecords] = useState([]);
    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            var body_string = JSON.stringify(bod);
            // console.log('body_str', body_string);
            const response = await fetch(url, {
                method: "POST",
                body: body_string,
                headers: {"Content-type": "application/json"},
              });

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const rec = await response.json();
            setRecords(rec);
        }
        
        getRecords(); 
        return;}, 
    invar);

    return records;
}

export default PostSet;