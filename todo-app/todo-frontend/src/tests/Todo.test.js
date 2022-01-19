import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Todo from '../Todos/Todo'

test('render todo undone todo', () => {
    const todo = {
        text: 'Doo dis desting',
        done: false
    }

    const component = render(
        <Todo todo={todo} completeFunc={() => { }} deleteFunc={() => { }} />
    )

    const div = component.container.querySelector('.todo')
    expect(div).toHaveTextContent(
        'Doo dis desting'
    )
    expect(div).toHaveTextContent(
        'This todo is not done'
    )
    const deleteButton = component.container.querySelector('.delete-button')
    expect(deleteButton).toBeDefined()
    const completeButton = component.container.querySelector('.complete-button')
    expect(completeButton).toBeDefined()
})

test('complete button should not be defined with done todo todo', () => {
    const todo = {
        text: 'I have done this todo',
        done: true
    }

    const component = render(
        <Todo todo={todo} completeFunc={() => { }} deleteFunc={() => { }} />
    )

    const div = component.container.querySelector('.todo')
    expect(div).toHaveTextContent(
        'I have done this todo'
    )
    expect(div).toHaveTextContent(
        'This todo is done'
    )
    const deleteButton = component.container.querySelector('.delete-button')
    expect(deleteButton).toBeDefined()
    const completeButton = component.container.querySelector('.complete-button')
    expect(completeButton).toBe(null)
})