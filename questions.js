
const questions = [
  {
    topic: "Foundations and Applications of AI",
    type: "MCQ",
    difficulty: "Easy",
    question: "A hospital uses software to identify possible tumors in MRI scans. Which AI application is demonstrated?",
    options: ["Natural language translation", "Medical image analysis", "Game-tree search", "Speech synthesis"],
    answer: 1,
    explanation: "Medical image analysis uses AI to help identify patterns and abnormalities in medical scans.",
    hint: "Think about the type of information being processed."
  },
  {
    topic: "Foundations and Applications of AI",
    type: "Scenario",
    difficulty: "Medium",
    question: "An email system learns from previously labeled messages to classify new emails as spam or legitimate. Which approach is being used?",
    options: ["Supervised learning", "Uninformed search", "Means-end analysis", "Random exploration"],
    answer: 0,
    explanation: "Supervised learning uses labeled examples to learn how to classify new inputs.",
    hint: "Consider whether the training examples include known answers."
  },
  {
    topic: "Foundations and Applications of AI",
    type: "MCQ",
    difficulty: "Easy",
    question: "Which field most directly helps AI systems draw conclusions using formal rules?",
    options: ["Computer graphics", "Logic", "Typography", "Networking"],
    answer: 1,
    explanation: "Logic provides formal methods for representing knowledge and deriving conclusions.",
    hint: "Think about mathematical reasoning."
  },
  {
    topic: "Turing Test",
    type: "MCQ",
    difficulty: "Easy",
    question: "In the traditional Turing Test, what does the human evaluator attempt to determine?",
    options: ["Which participant is a machine", "Which computer runs fastest", "Which program uses less memory", "Which robot moves most accurately"],
    answer: 0,
    explanation: "The evaluator communicates with hidden participants and tries to distinguish a machine from a human.",
    hint: "Focus on the evaluator's judgment during conversation."
  },
  {
    topic: "Turing Test",
    type: "True/False",
    difficulty: "Medium",
    question: "Passing a Turing Test proves that a machine possesses human consciousness.",
    options: ["True", "False"],
    answer: 1,
    explanation: "The Turing Test evaluates conversational behavior, not whether a machine is conscious.",
    hint: "Consider the difference between observable behavior and internal experience."
  },
  {
    topic: "Rational Agents",
    type: "Scenario",
    difficulty: "Medium",
    question: "A delivery robot chooses a longer route because the shorter route is currently unsafe. Why can its decision be rational?",
    options: ["It ignores the destination", "It selects actions randomly", "It maximizes expected performance under its objectives", "It always follows the shortest route"],
    answer: 2,
    explanation: "Rational decisions depend on the performance measure and available information, not only distance.",
    hint: "Think about safety and the robot's objectives."
  },
  {
    topic: "Rational Agents",
    type: "MCQ",
    difficulty: "Easy",
    question: "A rational agent selects an action based primarily on which criterion?",
    options: ["The most recently used action", "The expected performance of available actions", "The action requiring the most computation", "The action chosen by another agent"],
    answer: 1,
    explanation: "A rational agent chooses an action expected to maximize its performance measure given its percept history and knowledge.",
    hint: "Think about how the agent evaluates possible outcomes."
  },
  {
    topic: "Rational Agents",
    type: "Assertion-Reason",
    difficulty: "Hard",
    question: "Assertion: A rational agent may make a decision that later produces an unfavorable outcome. Reason: Rationality depends on expected performance using available information.",
    options: ["Both are true, and the reason explains the assertion", "Both are true, but the reason does not explain the assertion", "Assertion true, reason false", "Assertion false, reason true"],
    answer: 0,
    explanation: "Rationality does not guarantee success because an agent may have incomplete information or face uncertainty.",
    hint: "Distinguish a good decision from a guaranteed result."
  },
  {
    topic: "Intelligent Agents",
    type: "MCQ",
    difficulty: "Easy",
    question: "Which pair describes how an intelligent agent typically interacts with its environment?",
    options: ["Sensors and actuators", "Compilers and interpreters", "Files and folders", "Databases and tables"],
    answer: 0,
    explanation: "Sensors obtain percepts from the environment, while actuators perform actions.",
    hint: "Think about how a robot observes and acts."
  },
  {
    topic: "Intelligent Agents",
    type: "Scenario",
    difficulty: "Medium",
    question: "A thermostat switches heating on when temperature falls below a threshold. Which agent architecture best describes this behavior?",
    options: ["Learning agent", "Simple reflex agent", "Utility-based agent", "Goal-based planning agent"],
    answer: 1,
    explanation: "A simple reflex agent uses condition-action rules based on current percepts.",
    hint: "Does the system need to plan future actions?"
  },
  {
    topic: "Intelligent Agents",
    type: "MCQ",
    difficulty: "Medium",
    question: "Which component of a learning agent evaluates how well it is performing?",
    options: ["Actuator", "Sensor", "Critic", "Problem generator"],
    answer: 2,
    explanation: "The critic provides feedback about performance to support learning.",
    hint: "Think about the component that provides evaluation."
  },
  {
    topic: "Agents and Environments",
    type: "Scenario",
    difficulty: "Medium",
    question: "For an autonomous taxi, which item belongs to its actuators?",
    options: ["Camera", "GPS receiver", "Steering control", "Radar sensor"],
    answer: 2,
    explanation: "Steering control changes the vehicle's movement and therefore acts as an actuator.",
    hint: "Identify what physically changes the environment."
  },
  {
    topic: "Agents and Environments",
    type: "MCQ",
    difficulty: "Medium",
    question: "In the PEAS framework, what does E represent?",
    options: ["Evaluation", "Environment", "Execution", "Exploration"],
    answer: 1,
    explanation: "PEAS stands for Performance measure, Environment, Actuators, and Sensors.",
    hint: "Think about the world in which the agent operates."
  },
  {
    topic: "Agents and Environments",
    type: "Fill in the Blank",
    difficulty: "Easy",
    question: "An agent receives information from its environment through ______.",
    options: ["Actuators", "Sensors", "Effectors", "Goals"],
    answer: 1,
    explanation: "Sensors allow agents to perceive information from their environment.",
    hint: "Think about cameras, microphones, and temperature detectors."
  },
  {
    topic: "Good Behaviour",
    type: "MCQ",
    difficulty: "Medium",
    question: "Which measure is most suitable for evaluating a robotic vacuum cleaner?",
    options: ["Number of internal variables", "Amount of dirt cleaned with reasonable time and energy", "Number of program statements", "Number of sensors installed"],
    answer: 1,
    explanation: "A performance measure should evaluate how successfully the agent achieves its task.",
    hint: "Focus on outcomes rather than implementation details."
  },
  {
    topic: "Good Behaviour",
    type: "True/False",
    difficulty: "Medium",
    question: "A rational agent must always possess complete knowledge of its environment.",
    options: ["True", "False"],
    answer: 1,
    explanation: "A rational agent can act using incomplete information and still choose the best expected action.",
    hint: "Consider agents operating under uncertainty."
  },
  {
    topic: "Nature of Environments",
    type: "Scenario",
    difficulty: "Medium",
    question: "A robot cannot observe objects hidden behind walls. Which property best describes its environment?",
    options: ["Fully observable", "Partially observable", "Deterministic", "Static"],
    answer: 1,
    explanation: "An environment is partially observable when sensors cannot provide the complete relevant state.",
    hint: "Consider whether the agent can see everything."
  },
  {
    topic: "Nature of Environments",
    type: "MCQ",
    difficulty: "Medium",
    question: "Which environment is a standard example of deterministic, fully observable, sequential, and turn-based operation?",
    options: ["Road traffic", "Poker", "Chess without a clock", "Outdoor drone navigation"],
    answer: 2,
    explanation: "Chess without a clock has visible board states and deterministic legal moves, and each move affects future decisions.",
    hint: "Look for an environment without hidden information or random outcomes."
  },
  {
    topic: "Nature of Environments",
    type: "Scenario",
    difficulty: "Hard",
    question: "A stock-trading agent makes decisions while market prices change during its computation. Which environment property is illustrated?",
    options: ["Static", "Dynamic", "Discrete", "Fully observable"],
    answer: 1,
    explanation: "A dynamic environment may change while the agent is deciding what to do.",
    hint: "Focus on whether the world waits for the agent."
  },
  {
    topic: "Problems and Problem Spaces",
    type: "MCQ",
    difficulty: "Easy",
    question: "Which element defines the condition that a search algorithm is trying to achieve?",
    options: ["Initial state", "Goal test", "Branching factor", "Frontier"],
    answer: 1,
    explanation: "A goal test determines whether a particular state satisfies the problem objective.",
    hint: "Think about how the algorithm recognizes success."
  },
  {
    topic: "Problems and Problem Spaces",
    type: "Scenario",
    difficulty: "Medium",
    question: "In a route-planning problem, what does a state typically represent?",
    options: ["The current location", "The programming language", "The computer's processor", "The search algorithm's name"],
    answer: 0,
    explanation: "A state represents a relevant configuration of the problem, such as the current location.",
    hint: "Consider what changes as the traveler moves."
  },
  {
    topic: "Problems and Problem Spaces",
    type: "MCQ",
    difficulty: "Medium",
    question: "What is the branching factor in a search problem?",
    options: ["The number of goal states", "The maximum or average number of successors per state", "The cost of the initial state", "The length of the final path"],
    answer: 1,
    explanation: "The branching factor describes how many successor nodes can be generated from a node.",
    hint: "Think about the number of available choices at each step."
  },
  {
    topic: "State Space Search",
    type: "Problem Solving",
    difficulty: "Medium",
    question: "A robot begins at (0,0) on a 3×3 grid and must reach (2,2), moving only right or down. What is the minimum number of moves?",
    options: ["2", "3", "4", "6"],
    answer: 2,
    explanation: "The robot needs two right moves and two down moves, totaling four.",
    hint: "Count the required horizontal and vertical movements."
  },
  {
    topic: "State Space Search",
    type: "MCQ",
    difficulty: "Medium",
    question: "What is the main difference between a state-space graph and a search tree?",
    options: ["A search tree can contain repeated representations of the same state", "A state-space graph never contains cycles", "A search tree contains only goal states", "A state-space graph contains no actions"],
    answer: 0,
    explanation: "Different paths in a search tree can reach the same underlying state, causing repeated nodes.",
    hint: "Consider whether two different paths can reach one location."
  },
  {
    topic: "State Space Search",
    type: "Problem Solving",
    difficulty: "Hard",
    question: "From state S, actions lead to A and B. From A, an action leads to G. From B, an action leads to C, then G. If every action costs 1, which solution has the lowest cost?",
    options: ["S-B-C-G", "S-A-G", "Both cost the same", "No solution exists"],
    answer: 1,
    explanation: "S-A-G uses two actions, whereas S-B-C-G uses three.",
    hint: "Compare the number of actions in each path."
  },
  {
    topic: "Production Systems",
    type: "MCQ",
    difficulty: "Easy",
    question: "A production system primarily represents knowledge using which structure?",
    options: ["Condition-action rules", "Pixel matrices", "Audio signals", "Network addresses"],
    answer: 0,
    explanation: "Production systems use rules that specify actions or conclusions when conditions are satisfied.",
    hint: "Think about IF-THEN statements."
  },
  {
    topic: "Production Systems",
    type: "Scenario",
    difficulty: "Medium",
    question: "An expert system has three rules whose conditions are simultaneously satisfied. What mechanism decides which rule fires?",
    options: ["Conflict resolution", "Goal testing", "Image segmentation", "State compression"],
    answer: 0,
    explanation: "Conflict resolution selects among applicable production rules.",
    hint: "Think about choosing between multiple applicable rules."
  },
  {
    topic: "Problem Characteristics",
    type: "MCQ",
    difficulty: "Medium",
    question: "Which characteristic is important when deciding whether a problem can be solved using independent subproblems?",
    options: ["Decomposability", "Screen resolution", "Processor brand", "Programming syntax"],
    answer: 0,
    explanation: "Decomposability concerns whether a problem can be divided into smaller, manageable subproblems.",
    hint: "Think about breaking a large task into parts."
  },
  {
    topic: "Problem Characteristics",
    type: "Scenario",
    difficulty: "Medium",
    question: "A chess-playing agent must consider that its opponent will respond to its moves. Which problem characteristic is most relevant?",
    options: ["An adversarial environment", "A single-step independent task", "A fully predictable opponent", "An absence of future consequences"],
    answer: 0,
    explanation: "Chess is adversarial because another agent makes decisions that influence the outcome.",
    hint: "Consider the role of the opponent."
  },
  {
    topic: "Issues in Search Program Design",
    type: "MCQ",
    difficulty: "Medium",
    question: "A search program repeatedly explores the same state through different paths. Which technique can reduce this unnecessary work?",
    options: ["Repeated-state detection", "Increasing screen brightness", "Removing the goal test", "Ignoring explored nodes"],
    answer: 0,
    explanation: "An explored-state set can prevent repeated expansion of states.",
    hint: "Think about remembering previously visited states."
  },
  {
    topic: "Issues in Search Program Design",
    type: "MCQ",
    difficulty: "Hard",
    question: "Which pair of criteria evaluates whether a search algorithm finds a solution when one exists and whether it finds the least-cost solution?",
    options: ["Speed and syntax", "Completeness and optimality", "Memory and visualization", "Branching and encoding"],
    answer: 1,
    explanation: "Completeness concerns finding a solution when one exists; optimality concerns finding a least-cost solution.",
    hint: "Think about guarantees rather than implementation."
  },
  {
    topic: "BFS",
    type: "Problem Solving",
    difficulty: "Medium",
    question: "BFS explores a tree with S as root, children A and B, and A's children C and D. Assuming left-to-right expansion, which order is correct?",
    options: ["S,A,C,D,B", "S,A,B,C,D", "S,B,A,D,C", "S,C,D,A,B"],
    answer: 1,
    explanation: "BFS visits the root, then all nodes at depth one, followed by nodes at depth two.",
    hint: "Group the nodes by their depth."
  },
  {
    topic: "BFS",
    type: "MCQ",
    difficulty: "Medium",
    question: "Which data structure is normally used for the frontier in Breadth-First Search?",
    options: ["Stack", "FIFO queue", "Priority queue ordered by heuristic", "Binary search tree"],
    answer: 1,
    explanation: "A FIFO queue processes nodes in the order they were discovered.",
    hint: "Think about which node should be expanded first."
  },
  {
    topic: "BFS",
    type: "Scenario",
    difficulty: "Medium",
    question: "A rescue robot needs a route requiring the fewest movements, and every movement costs the same. Why is BFS appropriate?",
    options: ["It guarantees the fewest-edge path", "It always requires constant memory", "It uses estimated distances", "It explores the deepest nodes first"],
    answer: 0,
    explanation: "BFS finds a shortest path in number of edges when actions have equal cost.",
    hint: "Consider how exploring by depth affects path length."
  },
  {
    topic: "DFS",
    type: "MCQ",
    difficulty: "Easy",
    question: "Which data structure is naturally associated with Depth-First Search?",
    options: ["FIFO queue", "Stack", "Heuristic priority queue", "Hash table only"],
    answer: 1,
    explanation: "DFS uses a stack or recursion to explore one branch deeply before backtracking.",
    hint: "Think about how recursive function calls are stored."
  },
  {
    topic: "DFS",
    type: "Problem Solving",
    difficulty: "Medium",
    question: "In a tree, S has children A and B; A has children C and D. With left-to-right DFS, what is the visit order?",
    options: ["S,A,B,C,D", "S,A,C,D,B", "S,B,D,C,A", "C,D,A,B,S"],
    answer: 1,
    explanation: "DFS explores A's subtree completely before returning to B.",
    hint: "Follow one branch before exploring siblings."
  },
  {
    topic: "DFS",
    type: "True/False",
    difficulty: "Medium",
    question: "Standard DFS always finds a shortest path in an unweighted graph.",
    options: ["True", "False"],
    answer: 1,
    explanation: "DFS can discover a longer path before a shorter one and does not guarantee shortest-path optimality.",
    hint: "Consider whether exploring deeply guarantees fewer edges."
  },
  {
    topic: "Iterative Deepening",
    type: "MCQ",
    difficulty: "Medium",
    question: "What is the main idea of Iterative Deepening Depth-First Search?",
    options: ["Run depth-limited DFS with progressively larger limits", "Run BFS using a heuristic priority queue", "Explore only the deepest possible level", "Remove all previously visited states permanently"],
    answer: 0,
    explanation: "IDDFS repeatedly performs depth-limited DFS, increasing the depth limit until a goal is found.",
    hint: "Think about repeated searches with changing depth restrictions."
  },
  {
    topic: "Iterative Deepening",
    type: "Problem Solving",
    difficulty: "Medium",
    question: "A goal is first reachable at depth 3. Starting with depth limit 0 and increasing by 1, how many depth limits does IDDFS attempt through finding the goal?",
    options: ["2", "3", "4", "5"],
    answer: 2,
    explanation: "The limits are 0, 1, 2, and 3, totaling four iterations.",
    hint: "Include the initial depth limit."
  },
  {
    topic: "Hill Climbing and Variations",
    type: "MCQ",
    difficulty: "Medium",
    question: "A hill-climbing algorithm stops at a state better than all its immediate neighbors but worse than the global best state. What has occurred?",
    options: ["Global optimum", "Local optimum", "Goal expansion", "Breadth-first traversal"],
    answer: 1,
    explanation: "A local optimum is better than nearby states but may not be globally best.",
    hint: "Distinguish nearby quality from overall quality."
  },
  {
    topic: "Hill Climbing and Variations",
    type: "Scenario",
    difficulty: "Hard",
    question: "An optimization algorithm occasionally accepts a worse solution to escape local optima. Which method is most closely associated with this behavior?",
    options: ["Steepest-ascent hill climbing", "Simulated annealing", "Breadth-first search", "Depth-limited search"],
    answer: 1,
    explanation: "Simulated annealing can accept worse moves with a probability that depends on temperature and the change in objective value.",
    hint: "Think about optimization methods inspired by physical processes."
  },
  {
    topic: "Hill Climbing and Variations",
    type: "MCQ",
    difficulty: "Medium",
    question: "How does steepest-ascent hill climbing choose its next state?",
    options: ["Select the best improving neighbor", "Select the first generated neighbor regardless of value", "Select the shallowest unexplored node", "Select a random previously visited state"],
    answer: 0,
    explanation: "Steepest-ascent hill climbing evaluates neighboring states and chooses the one offering the greatest improvement.",
    hint: "Think about comparing all immediate neighbors."
  },
  {
    topic: "Heuristic Search and Best First Search",
    type: "MCQ",
    difficulty: "Easy",
    question: "What does a heuristic function h(n) commonly estimate in goal-directed search?",
    options: ["Cost from the start to n", "Remaining cost from n to a goal", "Number of processors used", "Total number of states in memory"],
    answer: 1,
    explanation: "A heuristic estimates the remaining cost of reaching a goal from a state.",
    hint: "Consider what information helps prioritize unexplored states."
  },
  {
    topic: "Heuristic Search and Best First Search",
    type: "Problem Solving",
    difficulty: "Medium",
    question: "Greedy Best-First Search has frontier nodes A, B, and C with h(A)=8, h(B)=3, and h(C)=5. Which node is selected next?",
    options: ["A", "B", "C", "All simultaneously"],
    answer: 1,
    explanation: "Greedy Best-First Search chooses the frontier node with the smallest heuristic estimate, which is B.",
    hint: "Compare the estimated remaining costs."
  },
  {
    topic: "Heuristic Search and Best First Search",
    type: "Problem Solving",
    difficulty: "Hard",
    question: "A* Search has nodes P with g=4,h=6; Q with g=7,h=2; and R with g=3,h=7. Which node is selected using the smallest f=g+h?",
    options: ["P", "Q", "R", "All have equal f"],
    answer: 1,
    explanation: "The f-values are P=10, Q=9, and R=10, so Q has the lowest estimated total cost.",
    hint: "Calculate the combined cost for each node."
  },
  {
    topic: "Constraint Satisfaction Problems",
    type: "Scenario",
    difficulty: "Medium",
    question: "A university assigns examination time slots so that students taking two subjects never have overlapping exams. What type of problem is this?",
    options: ["Constraint Satisfaction Problem", "Turing Test", "Image recognition", "Unsupervised clustering"],
    answer: 0,
    explanation: "Exam scheduling involves assigning values to variables while satisfying constraints.",
    hint: "Think about rules restricting possible assignments."
  },
  {
    topic: "Constraint Satisfaction Problems",
    type: "Problem Solving",
    difficulty: "Hard",
    question: "Three regions A, B, and C form a triangle, so every pair shares a border. If each region must have a different color, what is the minimum number of colors required?",
    options: ["1", "2", "3", "4"],
    answer: 2,
    explanation: "All three regions are adjacent to one another, so each requires a different color.",
    hint: "Check whether any two regions can share a color."
  },
  {
    topic: "Constraint Satisfaction Problems",
    type: "MCQ",
    difficulty: "Medium",
    question: "In CSP backtracking, which heuristic selects the variable with the fewest remaining legal values?",
    options: ["Maximum branching factor", "Minimum Remaining Values", "Random restart", "Greedy Best-First Search"],
    answer: 1,
    explanation: "Minimum Remaining Values selects the most constrained unassigned variable.",
    hint: "Think about identifying difficult variables early."
  },
  {
    topic: "Means-End Analysis",
    type: "Scenario",
    difficulty: "Medium",
    question: "A robot wants to move a box onto a shelf but first needs to reach the box and clear the shelf. Which technique reduces differences between its current and desired states through subgoals?",
    options: ["Means-End Analysis", "Random search", "Turing Test", "Simple reflex control"],
    answer: 0,
    explanation: "Means-End Analysis identifies differences between current and goal states and creates subgoals to reduce them.",
    hint: "Think about breaking a goal into necessary intermediate tasks."
  },
  {
    topic: "Means-End Analysis",
    type: "MCQ",
    difficulty: "Medium",
    question: "In Means-End Analysis, what should an agent do when the operator needed to reduce a goal difference has an unmet precondition?",
    options: ["Ignore the precondition", "Create a subgoal to satisfy the precondition", "Declare the goal achieved", "Restart with a random action"],
    answer: 1,
    explanation: "Means-End Analysis establishes subgoals for unmet operator preconditions before applying the operator.",
    hint: "Consider what must happen before an action becomes possible."
  }

];
