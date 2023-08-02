/* eslint-disable max-len */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import aws from 'aws-sdk';
import * as nodemailer from 'nodemailer';

import { MailerTemplateService } from '../mailer-template/mailer-template.service';

@Injectable()
export class MailerService {
  private readonly awsSes = new aws.SES();
  private readonly defaultSender = this.configService.get('DEFAULT_EMAIL_SENDER');
  private readonly transporter = nodemailer.createTransport({ SES: this.awsSes });

  constructor(
    private readonly configService: ConfigService,
    private mailerTemplateService: MailerTemplateService,
  ) {}

  // REMOVED
}
