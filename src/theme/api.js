const baseUrl = process.env.REACT_APP_API_URL

export const currency = baseUrl + "/currency"
export const jobPost = baseUrl + "/job/post"
export const jobUpdate = baseUrl + "/job/update"
export const finalJobPost = jobPost + "/finalsubmit"

export const jobKeywords = baseUrl + "job/keywordvalues"
export const SelectionCriteria = baseUrl + "/job/selectioncriteria"