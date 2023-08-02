/* eslint-disable max-len */
import fs from 'fs/promises';
import path from 'path';

import { Injectable } from '@nestjs/common';

import Handlebars from 'handlebars';

const TEMPLATES = {
  INVITATION: 'invitation.html',
  RESET_PASSWORD: 'reset-password.html',
  None: 'none-email.html',
};

const cache: Record<string, string> = {
  [TEMPLATES.INVITATION]:
    '<p>Please click the following <a href="{{ link }}" target="_blank">link</a> so you can start using your account.</p>',
  [TEMPLATES.RESET_PASSWORD]:
    '<p>Please click the following <a href="{{ link }}" target="_blank">link</a> to reset your password.</p>',
};

@Injectable()
export class MailerTemplateService {
  
}
