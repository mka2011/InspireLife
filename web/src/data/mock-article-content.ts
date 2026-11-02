import type { Article, ArticleBlock } from "@/types/article";
import { mockArticles } from "@/data/mock-articles";

interface StoryDraft {
  subtitle?: string;
  opening: string;
  heading: string;
  paragraphs: readonly string[];
  practice: string;
  prompts: readonly string[];
  closing: string;
}

// Original illustrative prose, not an account of the author's life or experience.
const drafts: Record<string, StoryDraft> = {
  "every-child-blooms-in-their-own-time": {
    subtitle: "On patience, comparison, and making space for a child's own rhythm.",
    opening: "In a garden, we do not expect every seed to break the soil on the same morning. We know that light, weather, and the quiet work beneath the surface all play a part. Yet when we look at children, it can be surprisingly easy to forget that growth has many rhythms.",
    heading: "Noticing the child in front of us",
    paragraphs: [
      "One child may fill a room with questions while another watches carefully from its edge. The quieter child is not necessarily less curious. Curiosity can take the form of listening, returning to the same small task, or studying something long after everyone else has moved on.",
      "Comparison narrows our attention to what can be measured at a glance. We notice who finished first and miss who found a different way. A more generous kind of attention leaves room for effort, delight, and the small changes that are visible only when we slow down.",
      "Patience does not mean ignoring a child's needs or expecting time to solve everything. It means making space to listen, offering support where it is needed, and resisting the temptation to turn every difference into a race. Care and acceptance can sit comfortably beside one another.",
    ],
    practice: "Making room for a different pace",
    prompts: ["Notice something the child enjoys without asking how well they do it.", "Leave a little unscheduled time for an idea to unfold.", "Ask what felt interesting today, rather than what was achieved."],
    closing: "Perhaps our task is less like setting a clock and more like tending a garden: paying attention, making room, and staying close enough to notice when something begins to bloom. We can celebrate a new leaf without asking why it arrived later than another.",
  },
  "the-gift-of-an-unhurried-afternoon": {
    opening: "An afternoon without a plan can feel like an unfinished sentence. We are used to filling the gaps, especially when children are nearby. But a little open time can become an invitation rather than a problem to solve.",
    heading: "Leaving space in the day",
    paragraphs: ["A game made from cushions may begin slowly. Someone wanders, someone complains, and an idea arrives almost by accident. Not every quiet hour becomes magical, but it can still offer the ordinary comfort of being together without a deadline.", "An unhurried afternoon does not require a perfect home or a cheerful mood. It asks only for a small space where the next activity is not already decided. That space might be ten minutes at the kitchen table or a walk around the same familiar block."],
    practice: "An invitation without an agenda",
    prompts: ["Offer a few simple materials and let the idea belong to the child.", "Put one unnecessary task aside for a short while.", "Allow a conversation to wander without steering it toward a lesson."],
    closing: "We do not have to make every afternoon memorable. Sometimes the gift is simply that it did not have to become anything at all. A little ease can be enough.",
  },
  "what-the-changing-seasons-teach-us": {
    opening: "A season rarely announces its arrival all at once. A different light falls across a wall; a familiar tree looks newly bare. Change often becomes visible through these small details before we have words for it.",
    heading: "Letting one season become another",
    paragraphs: ["We sometimes expect ourselves to welcome every change with certainty. Yet an ending can hold affection and relief at the same time. Missing what was does not prevent us from making room for what is coming.", "Nature offers no promise that transition will be tidy. Leaves fall while other branches remain green. In our own lives, too, readiness may arrive unevenly. We can take the next useful step without pretending that every feeling has been settled."],
    practice: "Noticing what is changing",
    prompts: ["Name one thing you would like to carry into the next season.", "Give an ending a small, ordinary acknowledgement.", "Look for something new along a familiar route."],
    closing: "A changing season invites us to loosen our grip a little. We can honour what has been and still turn toward the light that is here now.",
  },
  "learning-to-begin-again": {
    opening: "The idea of beginning again can sound enormous, as though a new chapter requires a different life. More often, a beginning is a modest choice made inside the life we already have.",
    heading: "Small beginnings count",
    paragraphs: ["A notebook opened after a long silence, a walk resumed, a conversation approached with more care: none of these needs an announcement. Their value is in the attention we bring to them, not in how impressive they look from outside.", "There may be days when the old habit returns. That does not erase the effort that came before. We can notice the interruption, consider what made the practice difficult, and make the next step a little more possible."],
    practice: "Choosing the next small step",
    prompts: ["Choose a beginning small enough to fit into an ordinary day.", "Let yesterday offer information rather than a verdict.", "Notice effort before looking for a result."],
    closing: "Beginning again is one way of remaining open to possibility. We do not need to know the whole path before taking a little care with the next step.",
  },
  "a-little-room-for-wonder": {
    opening: "Wonder does not always arrive in a remarkable place. Sometimes it is waiting in the pattern of a leaf, the shape of a shadow, or the unexpected colour of the evening sky.",
    heading: "Attention without a task",
    paragraphs: ["Much of our looking is practical. We check the time, find the right doorway, and read the next message. Looking with no particular task can feel unfamiliar, but it allows a small part of the world to become interesting on its own terms.", "We do not need to turn noticing into another achievement. Some days nothing catches our attention. On others, a familiar object seems briefly new. There is room for both kinds of day."],
    practice: "An ordinary invitation",
    prompts: ["Look closely at one natural object without naming it straight away.", "Notice how the light changes in a familiar room.", "Share a small discovery with someone who might enjoy it."],
    closing: "A little room for wonder is also a little room for surprise. The world need not become extraordinary before we give it our attention.",
  },
  "the-path-that-asks-us-to-slow-down": {
    opening: "A woodland path offers a different kind of invitation from a busy street. There may still be a destination, but there is also moss beside the railing and light moving through the trees.",
    heading: "Walking at the pace of noticing",
    paragraphs: ["When a walk becomes another task to finish, we can pass through a place without really meeting it. Slowing down for a few steps changes what becomes visible: a branch worn smooth, a fern uncurling, the small geography of the ground.", "Not everyone has a forest nearby, and not every day allows a long walk. A tree beside a pavement or a patch of sky above a doorway can offer a smaller version of the same invitation. Attention does not require a perfect setting."],
    practice: "A walk without a checklist",
    prompts: ["Pause somewhere you would usually pass.", "Let one sound become clear before moving on.", "Return to the same place and notice what has changed."],
    closing: "The path does not ask us to bring back a lesson. It may be enough to return having spent a little time in the company of something beyond our plans.",
  },
  "listening-beyond-the-words": {
    opening: "A child may tell us about a difficult day by talking about something quite different. The words can be a beginning rather than the whole story, especially when a feeling is still hard to name.",
    heading: "Making room before answering",
    paragraphs: ["It is natural to want to help quickly. We reach for an explanation, a suggestion, or a reassuring phrase. Sometimes that is welcome. Sometimes the first useful thing is a little space in which the child can finish their thought.", "Listening does not mean guessing at a hidden meaning or treating silence as a puzzle to solve. We can ask a gentle question and accept that the answer may come later. Respect includes allowing another person to choose how much to share."],
    practice: "Practising a gentler response",
    prompts: ["Leave a brief pause before offering advice.", "Ask whether company or help would feel useful.", "Return to the conversation later without demanding an explanation."],
    closing: "We will not always understand at once. But we can make it easier to come back, to try another word, or to sit together until the story is ready.",
  },
  "finding-stillness-in-small-things": {
    opening: "Stillness can seem like something that belongs to a quiet room far away from daily life. Yet ordinary routines may offer brief places to rest our attention without leaving the day behind.",
    heading: "The meaning in a small ritual",
    paragraphs: ["Opening a window, pouring a cup of tea, or tending a plant can become a moment of deliberate care. The action need not be elaborate. Its meaning may come simply from doing one thing with attention rather than hurrying through it.", "For some people, such moments connect with faith; for others, they offer a feeling of belonging or gratitude. There is no single experience to reproduce. A ritual can remain personal, modest, and open to change."],
    practice: "Returning to the ordinary",
    prompts: ["Choose one daily action to do without another task beside it.", "Notice something you feel grateful to receive.", "Let a quiet moment be brief if that is what the day allows."],
    closing: "The small things do not remove life's demands. They can, however, remind us that meaning may be present within the day we already have.",
  },
  "a-world-worth-noticing": {
    opening: "Standing beneath a tall tree can change the scale of a busy day. The list of things waiting for us remains, but for a moment it is part of a much wider landscape.",
    heading: "Looking beyond the immediate",
    paragraphs: ["A cliff, a cloud, or a line of trees offers no opinion about how productive we have been. There is a relief in that indifference. We can be present without needing to explain ourselves or improve the view.", "Care for a place can begin with knowing it. Returning often enough to recognise a tree or a changing patch of ground makes the landscape less like a backdrop and more like somewhere we belong."],
    practice: "Getting to know a place",
    prompts: ["Learn the name of one tree near home.", "Notice a place in more than one kind of weather.", "Leave the space with the same care you would offer a shared room."],
    closing: "The wider world need not make our concerns feel small or foolish. It can simply give them more room, reminding us that we live among many things worth caring for.",
  },
  "questions-more-useful-than-answers": {
    opening: "A child's question can open a door we did not know was there. Why does this float? Where does that shadow go? The temptation is to answer quickly and move on, but curiosity sometimes asks for company rather than speed.",
    heading: "Following the question together",
    paragraphs: ["An honest ‘I wonder’ can be a useful beginning. It leaves space to look, make a guess, or find a reliable explanation together. Not knowing need not become a performance; it can be part of an ordinary conversation.", "There will also be moments when a child simply wants a clear answer. Following curiosity means listening to that need as well. We can offer information without turning every question into a lesson."],
    practice: "Leaving curiosity open",
    prompts: ["Ask what made the question interesting.", "Try a simple observation before offering an explanation.", "Make room to change a guess when new information arrives."],
    closing: "A good question can stay with us after an answer is found. It offers a way of meeting the world with interest, and of learning alongside one another.",
  },
  "making-peace-with-the-unfinished": {
    opening: "An unfinished task can gather a surprising weight. The book half read, the letter not yet sent, the small repair waiting by the door: each can begin to feel like a judgement rather than a practical matter.",
    heading: "A life still taking shape",
    paragraphs: ["Some unfinished things need a plan. Others need permission to be set aside. Distinguishing between them can be kinder than carrying everything forward simply because we once intended to do it.", "We are unfinished in a different way. Our ideas change, our understanding deepens, and familiar lessons sometimes need to be learned again. There is no final version of a person that makes further growth unnecessary."],
    practice: "Making a little room",
    prompts: ["Choose one unfinished task to continue and one to release.", "Name what is already useful in a work in progress.", "Give yourself a realistic next step rather than a distant deadline."],
    closing: "Making peace with the unfinished is not giving up on care. It is a way of offering care to the life that is actually here, with its limits and its possibilities.",
  },
  "the-kindness-we-can-practise": {
    opening: "Kindness often appears as a small choice made in an ordinary moment. We can leave room for an explanation, soften an impatient reply, or acknowledge effort that might otherwise go unseen.",
    heading: "Compassion in everyday language",
    paragraphs: ["A generous response does not require us to agree with everything or ignore our own limits. We can speak clearly and still remember that the person in front of us has a life we cannot fully see.", "The same generosity can turn inward. Noticing a mistake without making it our whole identity leaves more room to repair what happened. Care is easier to practise when it includes the person doing the practising."],
    practice: "One ordinary choice",
    prompts: ["Replace one quick judgement with a sincere question.", "Offer thanks for something usually taken for granted.", "Allow a clear boundary to be expressed with warmth."],
    closing: "We do not have to become endlessly patient before offering kindness. We can begin with the next conversation, the next response, and the small choices still available to us.",
  },
  "a-pause-before-the-day-begins": {
    opening: "Before the day's plans gather speed, there may be a brief moment in which nothing has yet been asked of us. It can be easy to fill that moment immediately, as though an empty space needs an explanation.",
    heading: "Meeting the morning as it is",
    paragraphs: ["A pause need not become a routine to perfect. It might be one quiet look through the window or a moment spent noticing the feel of a cup. Some mornings will not allow even that, and the invitation can wait.", "Attention is not a guarantee of a peaceful day. There will still be interruptions and unfinished tasks. The value of a pause may simply be that, for a moment, we met the morning before trying to manage it."],
    practice: "A modest beginning",
    prompts: ["Notice the light before reaching for a screen.", "Choose one intention small enough to remember.", "Begin again later if the morning has already hurried past."],
    closing: "The day does not need to begin perfectly to hold something good. A little attention, offered whenever it becomes possible, can be a beginning of its own.",
  },
};

export const mockArticleDetails: readonly Article[] = mockArticles.map((summary) => {
  const draft = drafts[summary.slug];
  if (!draft) throw new Error(`Missing mock article content: ${summary.slug}`);
  const content: ArticleBlock[] = [
    { type: "paragraph", content: [{ type: "text", text: draft.opening }] },
    { type: "heading", level: 2, text: draft.heading },
    ...draft.paragraphs.map((text): ArticleBlock => ({ type: "paragraph", content: [{ type: "text", text }] })),
  ];
  if (summary.featured) {
    content.push(
      { type: "quote", text: "Growth is not a race to be won, but a life to be noticed with care." },
      { type: "paragraph", content: [
        { type: "text", text: "Attention", bold: true },
        { type: "text", text: " can begin with a question: " },
        { type: "text", text: "What is here that I have not yet noticed?", italic: true },
      ] },
    );
  }
  content.push(
    { type: "heading", level: 2, text: draft.practice },
    { type: "heading", level: 3, text: "A few gentle invitations" },
    { type: "list", ordered: summary.category === "Mindfulness", items: draft.prompts },
  );
  if (summary.slug === "every-child-blooms-in-their-own-time") {
    content.push({ type: "image", image: { src: "/images/journal/woodland-path.jpg", alt: "A footbridge leading into green woodland.", width: 800, height: 500 }, caption: "A path through the trees: an illustrative photograph, not a location from the author's life. Source: Unsplash; see image credits in the repository." });
  }
  content.push(
    { type: "paragraph", content: [{ type: "text", text: draft.closing }] },
    { type: "paragraph", content: [{ type: "text", text: "For another quiet moment, explore " }, { type: "link", text: "more from the journal", href: "/writings/" }, { type: "text", text: "." }] },
  );
  return { ...summary, subtitle: draft.subtitle, author: "Roots & Reflections · Placeholder author", content };
});
