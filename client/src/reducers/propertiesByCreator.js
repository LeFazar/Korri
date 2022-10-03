export default (
  propertiesByPage = { properties: [], currentPage: 1, numberOfPages: 1 },
  action
) => {
  switch (action.type) {
    case "FETCH_ALL_GLOBAL_BY_PAGE":
      return {
        ...propertiesByPage,
        properties: action.payload.properties,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case "FETCH_ALL_BY_CREATOR":
    //   console.log(action.payload.properties.length)
    //   console.trace()
      return {
        ...propertiesByPage,
        properties: action.payload.properties,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case "CREATE_GLOBAL":
      return { ...propertiesByPage, properties: action.payload };
    case "REMOVE_GLOBAL":
    return {
        ...propertiesByPage,
        properties: propertiesByPage.properties.filter(
        (single) => single._id !== action.payload
        ),
    };

    case "REMOVE":
        return {
            ...propertiesByPage,
            properties: propertiesByPage.properties.filter(
            (single) => single._id !== action.payload
            ),
        };
        
    case "UPDATE":
        const id = action.payload._id;
        const data = action.payload;
        return {
        ...propertiesByPage,
        properties: propertiesByPage.properties.map((property) =>
            property._id === id ? data : property
        ),
        };
        
    case "UPDATE_GLOBAL":
      const _id = action.payload._id;
      const _data = action.payload;
      return {
        ...propertiesByPage,
        properties: propertiesByPage.properties.map((property) =>
          property._id === _id ? _data : property
        ),
      };
    

    default:
      return propertiesByPage;
  }
};
