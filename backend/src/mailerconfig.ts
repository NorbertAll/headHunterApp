import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export = {
  transport: `smtp://admin123:admin123@localhost:2500`,
  defaults: {
    from: 'admin@admin.test.com',
  },
  template: {
    dir: '.templates/email',
    adapter: new HandlebarsAdapter(),
    options: {
      strict: true,
    },
  },
};
