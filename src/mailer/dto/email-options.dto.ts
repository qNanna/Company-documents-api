export class EmailOptionsDto {
  from?: string;
  to: string;
  subject: string;
  message: string;
  html?: string;
  replyTo?: string;
  cc?: string;
  bcc?: string[];
  altText?: string;
  attachments?: any[];
}
