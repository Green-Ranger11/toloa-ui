import react from "react";
import CommentForm from "./CommentForm";

function CommentSection() {
  return (
    <div class="antialiased mx-auto max-w-screen-sm">
      <h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
      <div class="space-y-4">
        <div class="flex">
          <div class="flex-1 pb-2 leading-relaxed">
            <strong>Sarah - SPC</strong>{" "}
            <span class="text-xs text-gray-400">3:34 PM</span>
            <p class="text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <h4 class="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
              Replies
            </h4>
            <div class="space-y-4">
              <div class="flex">
                <div class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                  <strong>John - UNDP</strong>{" "}
                  <span class="text-xs text-gray-400">3:34 PM</span>
                  <p class="text-xs sm:text-sm">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                  <strong>Alex - PIANGO</strong>{" "}
                  <span class="text-xs text-gray-400">3:34 PM</span>
                  <p class="text-xs sm:text-sm">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommentForm />

    </div>
  );
}

export default CommentSection;
