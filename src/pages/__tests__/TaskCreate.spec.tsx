import {renderApp} from "../../utils/renderApp";
import {TaskCreate} from "../TaskList/TastCreate/TaskCreate";
import {screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {createTask} from "../../store/tasks/tasksThunks";

jest.mock('react-redux', () => {
    const originalModule = jest.requireActual('react-redux');

    return {
        ...originalModule,
        useDispatch: () => jest.fn(),
    };
});

jest.mock('../../store/tasks/tasksThunks', () => ({
    createTask: jest.fn(),
}))

describe('Task Create', () => {
    beforeEach(() => {
        renderApp(
            <TaskCreate/>
        );
    })

    it('Should render form', () => {
        expect(screen.getByTestId('name')).toBeVisible();
        expect(screen.getByTestId('email')).toBeVisible();
    });

    it('Should submit valid form', async () => {
        userEvent.type(screen.getByTestId('name'), 'Name Long Enough');
        userEvent.type(screen.getByTestId('email'), 'some@email.com');
        userEvent.click(screen.getByText('Save task'));

        await waitFor(() => {
            expect(createTask).toBeCalled();
        });

        expect(createTask).toBeCalledWith({
            name: 'Name Long Enough',
            email: 'some@email.com',
        });
    });

    it('Should reject invalid form', async () => {
        userEvent.type(screen.getByTestId('name'), 'Name');
        userEvent.click(screen.getByText('Save task'));

        await waitFor(() => {
            expect(screen.getByText('Task name should be long enough')).toBeVisible();
        });
        expect(screen.getByText('email is a required field')).toBeVisible();
    });
});
