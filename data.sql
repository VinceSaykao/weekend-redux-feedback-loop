-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

CREATE TABLE feedback (
	id SERIAL PRIMARY KEY,
	feeling INTEGER,
	understanding INTEGER,
	support INTEGER,
	comments VARCHAR(200)
);

INSERT INTO "feedback" ("feeling","understanding","support","comments") VALUES
('5','5','5','thanks');
