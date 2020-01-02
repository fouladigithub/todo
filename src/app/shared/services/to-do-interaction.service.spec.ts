import { TestBed } from '@angular/core/testing';

import { ToDoInteractionService } from './to-do-interaction.service';

describe('ToDoInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoInteractionService = TestBed.get(ToDoInteractionService);
    expect(service).toBeTruthy();
  });
});
