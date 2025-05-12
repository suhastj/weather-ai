import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('greet', () => {
    it('should return personalized greeting with provided name', () => {
      expect(appController.getPersonalizedHello('John')).toBe('Hello John');
    });

    it('should handle empty name', () => {
      expect(appController.getPersonalizedHello('')).toBe('Hello ');
    });

    it('should handle name with spaces', () => {
      expect(appController.getPersonalizedHello('John Doe')).toBe('Hello John Doe');
    });
  });
});
