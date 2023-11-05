const deleteElement = async (id, inserimentiForm, setInserimentiForm) => {
    const newArray = inserimentiForm.filter((e) => e.id !== id);
    const ret = await fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE",
    });

    console.log(ret);
    setInserimentiForm(newArray);
  };

  export default deleteElement;