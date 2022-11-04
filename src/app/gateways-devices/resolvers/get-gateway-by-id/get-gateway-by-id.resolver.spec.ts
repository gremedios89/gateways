import { TestBed } from '@angular/core/testing';

import { GetGatewayByIdResolver } from './get-gateway-by-id.resolver';

describe('GetGatewayByIdResolver', () => {
  let resolver: GetGatewayByIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetGatewayByIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
