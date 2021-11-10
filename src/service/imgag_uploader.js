export class ImageUploader {
  async upload (fileData) {
    // return file
    const url = 'https://api.cloudinary.com/v1_1/dbbyjo/image/upload'
    const formData = new FormData()
    formData.append('file', fileData)
    formData.append('upload_preset', 'bweisupi')

    const result = await fetch(url, {
      method: 'POST',
      body: formData
    })
    return await result.json()
  }
}
