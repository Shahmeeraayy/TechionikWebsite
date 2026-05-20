export const convertToHtml = (data: string | string[] | undefined) : string =>{
    if(!data){
        return "";
    }
    if(typeof data === "string"){
        return data;
    }
    if(Array.isArray(data)){
        return data.map(item => `<p> ${item}</p>`).join("");
    }


    return "";
}