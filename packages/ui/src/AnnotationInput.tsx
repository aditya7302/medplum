import { createReference } from '@medplum/core';
import { Annotation } from '@medplum/fhirtypes';
import React, { useRef, useState } from 'react';
import { Input } from './Input';
import { useMedplumProfile } from './MedplumProvider';

export interface AnnotationInputProps {
  name: string;
  defaultValue?: Annotation;
  onChange?: (value: Annotation) => void;
}

export function AnnotationInput(props: AnnotationInputProps): JSX.Element {
  const author = useMedplumProfile();
  const [value, setValue] = useState<Annotation>(props.defaultValue || {});

  const valueRef = useRef<Annotation>();
  valueRef.current = value;

  function setText(text: string): void {
    const newValue: Annotation = text
      ? {
          text,
          authorReference: author && createReference(author),
          time: new Date().toISOString(),
        }
      : {};

    setValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  }

  return (
    <Input name={props.name} type="text" placeholder="Annotation text" defaultValue={value.text} onChange={setText} />
  );
}
