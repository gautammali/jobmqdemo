import { useEffect, useState } from 'react'
import { useGetFilePathQuery, useUploadFileMutation } from '../../../../features/file/fileApi'

export default function useUploadFile() {
    const [fileId, setFileId] = useState("")
    const [checkFile, setCheckFile] = useState(false)
    const [uploadFile, { data: uploadData }] = useUploadFileMutation()
    // eslint-disable-next-line no-unused-vars
    const { fileData } = useGetFilePathQuery(fileId, { skip: !checkFile })



    useEffect(() => {
        if (uploadData?.isSuccess) {
            setFileId(uploadData?.data)
            setCheckFile(true)
        }
    }, [uploadData])


    function handleUploadFile(formData) {
        uploadFile(formData)
    }
    return {
        handleUploadFile
    }
}
