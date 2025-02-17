
const getAllApplyData = () =>{
    const AllApplyListStr = localStorage.getItem("applyList");
    if(AllApplyListStr){
        const AllApplyListInt = JSON.parse(AllApplyListStr);
        return AllApplyListInt;
    }
    else{
        return [];
    }

}

const storeApplyData = (id) =>{
    const data = getAllApplyData();

    if(data.includes(id)){
        console.log("You have already applied for this job");
    }
    else{
        data.push(id);
        console.log("You have successfully applied for this job");
        const AllApplyListStr = JSON.stringify(data);
        localStorage.setItem("applyList", AllApplyListStr);
    }

}

export  {storeApplyData, getAllApplyData}



