const getAge(DOB) => {
    const today = new Date();
    const birthDate = new Date(DOB);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age -1;
    }
}
