
const page_name = "/setting.html";
const file_input_btn = document.getElementById("file-system-input-btn");




if(window.location.pathname === page_name)
   {

        file_input_btn.addEventListener("click", async()=>{
        const handle = await window.showFolderPicker();
        return handle;
     })
   }