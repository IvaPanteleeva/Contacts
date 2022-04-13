import { State } from '../contacts.state';
import { createFeatureSelector } from '@ngrx/store';

export const getContactsFeatureState = createFeatureSelector<State>('contacts');
