import {TaskDetails} from "../TaskDetails";
import {renderApp} from "../../utils/renderApp";
import {screen} from "@testing-library/react";
import {ITask} from "../../api/tasks";
import {useParams} from "react-router-dom";

let mockParams = {id: 1};
const mockUseParams = useParams as jest.MockedFn<any>;

jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
        ...originalModule,
        useParams: jest.fn(),
    };
})

describe('Task Details', () => {
    beforeEach(() => {
        (mockUseParams).mockReturnValue(mockParams);
    });

    it('Component should render not found message', () => {
        renderApp(
            <TaskDetails/>
        );

        expect(screen.getByText('Incorrect id provided')).toBeVisible();
    });

    it('Should render task', () => {
        mockUseParams.mockReturnValue({ id: 2 });
        const task: ITask = {
            id: 2,
            email: 'email',
            name: 'name',
        };
        renderApp(
            <TaskDetails/>,
            { tasks: { tasksList: [task] } },
        );

        expect(screen.getByText(task.id)).toBeVisible();
        expect(screen.getByText(task.name)).toBeVisible();
    });
})
