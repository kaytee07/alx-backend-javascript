const getListStudentIds = (list) => {
    if (typeof list != 'object') return []  
    return list.map(arr => arr['id'])
}

export default getListStudentIds;
