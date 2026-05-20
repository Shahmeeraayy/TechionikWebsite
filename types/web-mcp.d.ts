import React from 'react';

declare module 'react' {
  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
    toolautosubmit?: string;
  }
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    'data-description'?: string;
  }
  interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
    'data-description'?: string;
  }
}