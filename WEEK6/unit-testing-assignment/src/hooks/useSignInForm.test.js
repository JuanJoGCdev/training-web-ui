import { renderHook, act } from '@testing-library/react-hooks';
import { useSignInForm } from './useSignInForm';
import { describe, it, expect, vi } from 'vitest';

describe('useSignInForm', () => {
  it('should update username and password', () => {
    const { result } = renderHook(() => useSignInForm());

    act(() => {
      result.current.handleUsernameChange({ target: { value: 'testuser' } });
      result.current.handlePasswordChange({ target: { value: 'password123' } });
    });

    expect(result.current.username).toBe('testuser');
    expect(result.current.password).toBe('password123');
  });

  it('should show error for empty fields', () => {
    const { result } = renderHook(() => useSignInForm());

    act(() => {
      result.current.handleSubmit({ preventDefault: vi.fn() });
    });

    expect(result.current.error).toBe('Please fill in all fields');
  });

  it('should show error for invalid username or password', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSignInForm());

    act(() => {
      result.current.handleUsernameChange({ target: { value: 'invalidUser' } });
      result.current.handlePasswordChange({ target: { value: 'invalidPass' } });
    });

    act(() => {
      result.current.handleSubmit({ preventDefault: vi.fn() });
    });

    await waitForNextUpdate();

    expect(result.current.error).toBe('Invalid username or password');
  });

  it('should handle successful sign in', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSignInForm());

    act(() => {
      result.current.handleUsernameChange({ target: { value: 'validUser' } });
      result.current.handlePasswordChange({ target: { value: 'validPass' } });
    });

    act(() => {
      result.current.handleSubmit({ preventDefault: vi.fn() });
    });

    await waitForNextUpdate();

    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBe(false);
  });
});
