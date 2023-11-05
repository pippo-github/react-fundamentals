import getData from './getData'
const addData = async (data, setInserimentiForm) => {

    const url = "http://localhost:5000/posts";

    const dataRet = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // const JsonData = await dataRet.json();
    getData(setInserimentiForm);
  };


  export default addData;