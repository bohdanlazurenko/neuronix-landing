export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
}

export interface ApiResponse {
  message?: string
  error?: string
  ok?: boolean
  timestamp?: string
}