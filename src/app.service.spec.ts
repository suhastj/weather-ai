import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      expect(service.getHello()).toBe('Hello World!');
    });
  });

  describe('getPersonalizedHello', () => {
    it('should return personalized greeting with provided name', () => {
      expect(service.getPersonalizedHello('John')).toBe('Hello John');
    });

    it('should handle empty name', () => {
      expect(service.getPersonalizedHello('')).toBe('Hello ');
    });

    it('should handle name with spaces', () => {
      expect(service.getPersonalizedHello('John Doe')).toBe('Hello John Doe');
    });

    it('should handle special characters in name', () => {
      expect(service.getPersonalizedHello('John-Doe')).toBe('Hello John-Doe');
    });
  });
}); 