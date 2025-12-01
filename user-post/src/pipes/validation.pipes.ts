import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export class ValidationPipe implements PipeTransform {
  async transform(value: any, meta: ArgumentMetadata) {
    if (!meta.metatype) return value;

    const object = plainToInstance(meta.metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      throw new BadRequestException('Validation xatosi');
    }

    return value;
  }
}
