document.addEventListener("DOMContentLoaded", function() {
    const itemList = document.getElementById("item-list");
    const input = document.getElementById("find-item");
    const itemImg = document.getElementById("image");


    // Map data to li elements
    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.value;
        itemList.appendChild(li);
        const img = document.createElement("img");
        img.src = item.image;
        itemList.appendChild(img);
        const detail = document.createElement("p");
        detail.className = "detail";
        detail.innerText = item.detail;
        itemList.appendChild(detail)
        itemList.appendChild(document.createElement("hr"))

    });

    // Add input event listener for real-time filtering
    input.addEventListener("input", function() {
        const inputValue = input.value.toLowerCase();
        
        // Clear the current list
        itemList.innerHTML = '';

        // Filter and display matching items
        data.forEach(item => {
            const lowerCaseValue = item.value.toLowerCase();
            if (lowerCaseValue.includes(inputValue)) {
                const li = document.createElement("li");
                li.innerText = item.value;
                itemList.appendChild(li);
                const img = document.createElement("img");
                img.src = item.image;
                itemList.appendChild(img);
                const detail = document.createElement("p");
                detail.className = "detail";
                detail.innerText = item.detail;
                itemList.appendChild(detail)
                itemList.appendChild(document.createElement("hr"))
            }
        });
    });
});