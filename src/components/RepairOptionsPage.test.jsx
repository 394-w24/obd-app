import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import RepairOptionsPage from './RepairOptionsPage';
import { initializeApp } from 'firebase/app';

vi.mock('react-router-dom', () => ({
    useNavigate: vi.fn(),
}));

const app = initializeApp({});

describe("user can see video when video option is clickes", () => {
    test("should open when button is clicked", () => {
        render(
            <RepairOptionsPage/>
        );

        const videoOption = screen.getByText("DIY Video Guide");

        //make sure video is not there
        expect(screen.queryByLabelText("You just opened the modal video")).toBeNull();
        
        //click button to open video
        fireEvent.click(videoOption);
        
        //ensure video has popped up
        const video = screen.getByLabelText("You just opened the modal video")
        expect(video).toBeDefined();
        screen.debug()

        const iframeElement = video.querySelector("iframe")
        console.log(iframeElement)
        
        //find autoplay
        expect(iframeElement.getAttribute("allow")).toContain("autoplay")

        //click button to open video
        const closeVideo = screen.getByLabelText("Close the modal by clicking here")
        fireEvent.click(closeVideo)
        
        //make sure video goes away
        expect(screen.queryByLabelText("You just opened the modal video")).toBeNull();

    });
});
