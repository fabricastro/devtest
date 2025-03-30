export type ScoreType = {
    [key in ProfileType]?: number;
};

export type ProfileType = 'frontend' | 'backend' | 'qa' | 'devops' | 'dba' | 'security' | 'design';

export interface OptionType {
    text: string;
    score: ScoreType;
}

export interface QuestionType {
    id: number;
    question: string;
    options: OptionType[];
}

export interface AnswerType {
    questionId: number;
    optionIndex: number;
}

export interface UserDataType {
    name: string;
    email: string;
    age: string;
    gender: string;
}

export interface ProfileResultType {
    primaryProfile: ProfileType;
    secondaryProfile: ProfileType;
    primaryProfileName: string;
    secondaryProfileName: string;
    primaryDescription: string;
    secondaryDescription: string;
    scores: Record<ProfileType, number>;
}

export interface ExtendedQuestion {
    id: number;
    perfil: ProfileType;
    pregunta: string;
    opciones: OptionType[];
  }  