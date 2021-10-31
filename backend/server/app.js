const express = require("express");
const cors = require("cors");

const app = express();

// 브라우저 cors 정책
const corsOption = {
  origin: "http://localhost:3700",
  credentials: true,
};

/**
 * node모듈 사용하는 것을 연결 app.use(모듈서비스)
 */
app.use(express.json());
app.use(express.urlencoded());
app.use(cors(corsOption));

/**
 * route 설정 및 연결
 */
